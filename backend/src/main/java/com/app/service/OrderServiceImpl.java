package com.app.service;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.OrderDAO;
import com.app.dao.ProductDAO;
import com.app.dao.UserDAO;
import com.app.dto.ApiResponse;
import com.app.dto.OrderDTO;
import com.app.dto.OrderPlacedDTO;
import com.app.dto.OrderRsDTO;
import com.app.dto.ProductRs2DTO;
import com.app.dto.ProductRs3DTO;
import com.app.exception.ResourceNotFoundException;
import com.app.pojos.Order;
import com.app.pojos.OrderStatus;
import com.app.pojos.Product;
import com.app.pojos.User;
@Service
@Transactional
public class OrderServiceImpl implements OrderService{

	@Autowired
	private UserDAO userdao;
	@Autowired
	private ProductDAO productDao;
	@Autowired
	private OrderDAO orderDao;
	@Autowired
	private ModelMapper modelMapper;
	
	private OrderRsDTO convertToDto(Order order) {
        OrderRsDTO orderDTO = modelMapper.map(order, OrderRsDTO.class);
        
        if(order.getId() != null) {
        	orderDTO.setOrderId(order.getId());
        }
        else {
        	orderDTO.setOrderId(0L);
        }
        // Set customerId manually to ensure it's included
        if (order.getCustomer() != null) {
            orderDTO.setCustomerId(order.getCustomer().getId());
        } else {
            orderDTO.setCustomerId(0L);  // Set default value instead of null
        }

        // Set productId manually to ensure it's included
        List<ProductRs2DTO> productNames = order.getProduct().stream()
                .map(product -> modelMapper.map(product, ProductRs2DTO.class))
                .collect(Collectors.toList());
        orderDTO.setProducts(productNames);

        return orderDTO;
    }
//	private OrderDTO convertToDTO(Order order) {
//        OrderDTO orderDTO = modelMapper.map(order, OrderDTO.class);
//        
//        if(order.getId() != null) {
//        	orderDTO.setOrderId(order.getId());
//        }
//        else {
//        	orderDTO.setOrderId(0L);
//        }
        // Set customerId manually to ensure it's included
//        if (order.getCustomer() != null) {
//            orderDTO.setCustomerId(order.getCustomer().getId());
//        } else {
//            orderDTO.setCustomerId(0L);  // Set default value instead of null
//        }

        // Set productId manually to ensure it's included
//        if (order.getProduct() != null) {
//            orderDTO.setProductId(order.getProduct().getId());
//        } else {
//            orderDTO.setProductId(0L);  // Set default value instead of null
//        }

//        return orderDTO;
//    }
	private OrderDTO convertToDTO(Order order) {
		OrderDTO dto = modelMapper.map(order, OrderDTO.class);
		dto.setCreatedOn(order.getCreatedOn());
		dto.setCustomerName(order.getCustomer().getFirstName());
		dto.setProductNames(order.getProduct().stream().map(Product::getProductName).collect(Collectors.toList()));
		double totalPrice = order.getProduct().stream().mapToDouble(Product::getPrice).sum();
		dto.setTotalPrice(totalPrice);
		return dto;
	}
	
	@Override
	public OrderDTO placeOrder(OrderPlacedDTO dto) {
		User customer = userdao.findById(dto.getCustomerId()).orElseThrow(()->new ResourceNotFoundException("Invalid Customer"));
		List<Product> products = productDao.findAllById(dto.getProductIds());
//		Product product = productDao.findById(dto.getProductId()).orElseThrow(()->new ResourceNotFoundException("Invalid Product"));
		Integer totalQuantity = products.size();
		double totalPrice = products.stream().mapToDouble(Product::getPrice).sum();
//		Order orderEntity = new Order(totalQuantity, OrderStatus.PLACED, customer, products);
		Order orderEntity = new Order();
		orderEntity.setCustomer(customer);
		orderEntity.setProduct(products);
		orderEntity.setTotalQuantity(totalQuantity);
		orderEntity.setStatus(OrderStatus.PLACED);
		Order savedOrder = orderDao.save(orderEntity);
		OrderDTO orderDto = convertToDTO(savedOrder);
		orderDto.setTotalPrice(totalPrice);
		return orderDto;
	}
	@Override
	public List<OrderRsDTO> getAllOrders() {
		return orderDao.findAll().stream().map(this::convertToDto).collect(Collectors.toList());
	}
	
	@Override
	public OrderRsDTO getOrderById(Long id) {
		Order order = orderDao.findById(id).orElseThrow(() -> new ResourceNotFoundException("Order not found"));
		return convertToDto(order);
	}

	@Override
	public List<OrderDTO> getOrdersByCustomer(Long customerId) {
		return orderDao.findByCustomerId(customerId).stream().map(this::convertToDTO).collect(Collectors.toList());
		
	}

}
