package com.app.exception;

public class ApiException extends RuntimeException {
	public ApiException(String errMesg) {
		super(errMesg);
	}
}
