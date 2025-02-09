package com.app.pojos;

import java.util.List;

import jakarta.persistence.Column;

import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Getter
@Setter
@NoArgsConstructor
@ToString(callSuper = true, exclude = {"customer","product"})
@Table(name = "orders")
public class Order extends BaseEntity{
	private Integer totalQuantity;
	@Enumerated(EnumType.STRING)
	@Column(length = 20)
	private OrderStatus status;
	@ManyToOne
	@JoinColumn(nullable = false)
	private User customer;
	@ManyToMany
	@JoinTable(
	        name = "order_products",
	        joinColumns = @JoinColumn(name = "order_id"),
	        inverseJoinColumns = @JoinColumn(name = "product_id")
	    )
	private List<Product> product;
	public Order(Integer totalQuantity, OrderStatus status) {
		super();
		this.totalQuantity = totalQuantity;
		this.status = status;
	}
	public Order(Integer totalQuantity, OrderStatus status, User customer, List<Product> product) {
		super();
		this.totalQuantity = totalQuantity;
		this.status = status;
		this.customer = customer;
		this.product = product;
	}
	
	
}
