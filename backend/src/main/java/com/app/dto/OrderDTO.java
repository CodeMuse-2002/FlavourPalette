package com.app.dto;

import java.time.LocalDate;
import java.util.List;

import com.app.pojos.OrderStatus;

import lombok.Getter;
import lombok.Setter;
@Setter
@Getter
public class OrderDTO {
	private Long orderId;
	private LocalDate createdOn;
	private Integer totalQuantity;
    private OrderStatus status;
    private String customerName;
    private List<String> productNames;
    private Double totalPrice;
}
