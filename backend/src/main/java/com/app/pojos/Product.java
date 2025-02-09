package com.app.pojos;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.FetchType;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@NoArgsConstructor
@Setter
@Getter
@ToString(callSuper = true, exclude = {"admin"})
@Table(name = "products")
public class Product extends BaseEntity{
	private Integer price;
	private Integer quantity;
	private String description;
	@Enumerated(EnumType.STRING)
	@Column(length = 20)
	private ProductCategory category;
	@Column(name = "product_name", length = 20)
	private String productName;
	@ManyToOne
	@JoinColumn(nullable = false)
	private User admin;
	public Product(Integer price,Integer quantity, ProductCategory category, String productName, String description) {
		super();
		this.price = price;
		this.quantity = quantity;
		this.category = category;
		this.productName = productName;
		this.description = description;
	}
	
}
