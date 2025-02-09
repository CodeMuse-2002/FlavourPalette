package com.app.dto;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

import com.app.pojos.Order;
import com.app.pojos.OrderStatus;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class OrderRsDTO {
	private LocalDate createdOn;
	private Long orderId;
	private OrderStatus status;
	private Integer totalQuantity;
	private Long customerId;
	private List<ProductRs2DTO> products;

}
