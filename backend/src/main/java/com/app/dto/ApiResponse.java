package com.app.dto;

import java.time.LocalDateTime;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
@Getter
@Setter
@NoArgsConstructor
public class ApiResponse {
	private LocalDateTime timestamp;
	private String message;
	public ApiResponse(String message) {
		super();
		this.timestamp = LocalDateTime.now();
		this.message = message;
	}
	
}
