package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.pojos.Product;
import com.app.pojos.ProductCategory;

public interface ProductDAO extends JpaRepository<Product, Long>{
	List<Product>findByCategory(ProductCategory category);
}
