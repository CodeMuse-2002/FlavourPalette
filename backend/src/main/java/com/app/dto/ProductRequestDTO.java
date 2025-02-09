package com.app.dto;

import com.app.pojos.ProductCategory;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class ProductRequestDTO {
	private ProductCategory category;
	private String productName;
	private Integer quantity;
	private Long adminId;
}
