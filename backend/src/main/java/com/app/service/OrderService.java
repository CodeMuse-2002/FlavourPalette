package com.app.service;

import java.util.List;


import com.app.dto.ApiResponse;
import com.app.dto.OrderDTO;
import com.app.dto.OrderPlacedDTO;
import com.app.dto.OrderRsDTO;

public interface OrderService {
	OrderDTO placeOrder(OrderPlacedDTO dto);

	List<OrderRsDTO> getAllOrders();

	OrderRsDTO getOrderById(Long id);

	List<OrderDTO> getOrdersByCustomer(Long customerId);
}
