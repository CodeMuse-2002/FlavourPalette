package com.app.dto;

import jakarta.validation.constraints.Email;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class AuthRequest {
	@NotBlank(message = "Email must be not blank")
	@Email(message = "Invalid email format")
	private String email;
	@NotBlank(message = "Password must be not blank")
	@Pattern(regexp = "((?=.*\\d)(?=.*[a-z])(?=.*[#@$*]).{5,20})", message = "Invalid Password format!!!!")
	private String password;
}
