package com.app.service;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.app.dao.ProductDAO;
import com.app.dao.UserDAO;
import com.app.dto.ApiResponse;
import com.app.dto.ProductRequestDTO;
import com.app.dto.ProductRs2DTO;
import com.app.dto.ProductRs3DTO;
import com.app.dto.ProductRsDTO;
import com.app.exception.ResourceNotFoundException;
import com.app.pojos.Product;
import com.app.pojos.ProductCategory;
import com.app.pojos.User;
@Service
@Transactional
public class ProductServiceImpl implements ProductService{
	@Autowired
	private UserDAO userDAO;
	@Autowired
	private ProductDAO productDAO;
	@Autowired
	private ModelMapper modelMapper;
	@Override
	public ApiResponse addProduct(ProductRequestDTO dto) {
		User admin = userDAO.findById(dto.getAdminId()).orElseThrow(()->new ResourceNotFoundException("Invalid Admin Id"));
		Product productEntity = modelMapper.map(dto, Product.class);
		productEntity.setAdmin(admin);
		productDAO.save(productEntity);
		return new ApiResponse( "Product added successfully");
		
	}
	@Override
	public List<ProductRs3DTO> getAllProducts() {
		return productDAO.findAll().stream().map(product -> modelMapper.map(product, ProductRs3DTO.class)).collect(Collectors.toList());
	}
	@Override
	public List<ProductRs2DTO> getProductByCategory(ProductCategory productCategory) {
		return productDAO.findByCategory(productCategory).stream().map(product -> modelMapper.map(product, ProductRs2DTO.class)).collect(Collectors.toList());
	}
	@Override
	public List<ProductRsDTO> getCategory() {
		return productDAO.findAll().stream().map(product -> modelMapper.map(product, ProductRsDTO.class)).distinct().collect(Collectors.toList());
	}

}
