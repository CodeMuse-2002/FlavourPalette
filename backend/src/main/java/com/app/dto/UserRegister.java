package com.app.dto;


import com.app.pojos.UserRole;

import lombok.Getter;
import lombok.Setter;
@Getter
@Setter
public class UserRegister {
	private String email;
	private String firstName;
	private String lastName;
	private String password;
	private UserRole role;
}
