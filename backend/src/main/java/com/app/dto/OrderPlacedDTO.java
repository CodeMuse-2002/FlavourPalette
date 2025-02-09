package com.app.dto;

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
@AllArgsConstructor
@NoArgsConstructor
public class OrderPlacedDTO {
	private OrderStatus status;
	private Integer totalQuantity;
	private Long customerId;
	private List<Long> productIds;

}
