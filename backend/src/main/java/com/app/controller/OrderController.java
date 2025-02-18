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
import com.app.dto.OrderPlacedDTO;
import com.app.pojos.Order;
import com.app.service.OrderService;


@RestController
public class OrderController {
	@Autowired
	private OrderService orderService;
	@CrossOrigin(origins = "http://localhost:3000")
	@PostMapping("/customer/place")
	public ResponseEntity<?> placeOrder(@RequestBody OrderPlacedDTO dto)
	{
		System.out.println("in order placed");
		try {
			return ResponseEntity.status(HttpStatus.CREATED).body(orderService.placeOrder(dto));
		}
		catch(RuntimeException e){
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new ApiResponse(e.getMessage()));
		}
	}
	
	@GetMapping("/admin/orders")
    public ResponseEntity<?> getAllOrders() {
		try {
			return ResponseEntity.status(HttpStatus.OK).body(orderService.getAllOrders());
		}
		catch(RuntimeException e){
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new ApiResponse(e.getMessage()));
		}
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getOrderById(@PathVariable Long id) {
    	try {
    		return ResponseEntity.status(HttpStatus.OK).body(orderService.getOrderById(id));
		}
		catch(RuntimeException e){
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new ApiResponse(e.getMessage()));
		}
    }
    
    @GetMapping("/customer/{customerId}")
    public ResponseEntity<?> getOrdersByCustomer(@PathVariable Long customerId) {
    	try {
    		return ResponseEntity.status(HttpStatus.OK).body(orderService.getOrdersByCustomer(customerId));
		}
		catch(RuntimeException e){
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new ApiResponse(e.getMessage()));
		}
    }
}
