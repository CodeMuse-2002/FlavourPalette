package com.app.service;


import java.util.List;



import com.app.dto.ApiResponse;
import com.app.dto.ProductRequestDTO;
import com.app.dto.ProductRs2DTO;
import com.app.dto.ProductRs3DTO;
import com.app.dto.ProductRsDTO;
import com.app.pojos.ProductCategory;

public interface ProductService {
	ApiResponse addProduct(ProductRequestDTO dto);

	List<ProductRs3DTO> getAllProducts();

	List<ProductRs2DTO> getProductByCategory(ProductCategory productCategory);

	List<ProductRsDTO> getCategory();
}
