package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.ApiResponse;
import com.app.dto.ProductRequestDTO;
import com.app.pojos.ProductCategory;
import com.app.service.ProductService;

@RestController
@RequestMapping("/products")

public class ProductController {
	@Autowired
	private ProductService productService;
//	@CrossOrigin(origins = "http://localhost:3000")
//	@PostMapping
//	public ResponseEntity<?> addNewProduct(@RequestBody ProductRequestDTO dto){
//		System.out.println("in add new Product" + dto);
//		try {
//			return ResponseEntity.status(HttpStatus.CREATED).body(productService.addProduct(dto));
//		}catch(RuntimeException e) {
//			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new ApiResponse(e.getMessage()));
//		}
//	}
	@CrossOrigin(origins = "http://localhost:3000")
	@GetMapping
	public ResponseEntity<?> getAllProducts()
	{
		System.out.println();
		try {
			return ResponseEntity.status(HttpStatus.OK).body(productService.getAllProducts());
		}catch(RuntimeException e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new ApiResponse(e.getMessage()));
		}
	}
	
	@CrossOrigin(origins = "http://localhost:3000")
	@GetMapping("/category")
	public ResponseEntity<?> getCategory()
	{
		System.out.println();
		try {
			return ResponseEntity.status(HttpStatus.OK).body(productService.getCategory());
		}catch(RuntimeException e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new ApiResponse(e.getMessage()));
		}
	}
	@CrossOrigin(origins = "http://localhost:3000")
	@GetMapping("/{category}")
	public ResponseEntity<?> getProductByCategory(@PathVariable ProductCategory category){
		System.out.println("in productCategory");
		try {
			return ResponseEntity.status(HttpStatus.OK).body(productService.getProductByCategory(category));
		}catch(RuntimeException e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new ApiResponse(e.getMessage()));
		}
		
	}
}
