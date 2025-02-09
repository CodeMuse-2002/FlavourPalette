package com.app.dto;

import com.app.pojos.ProductCategory;

import lombok.Getter;
import lombok.Setter;
@Setter
@Getter
public class ProductRs3DTO {
	private String productName;
	private ProductCategory category;
	private Integer price;
	private String description;
}
