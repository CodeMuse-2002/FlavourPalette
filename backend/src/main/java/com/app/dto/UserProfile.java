package com.app.dto;

import com.app.pojos.UserRole;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class UserProfile {
	private String firstName;
	private String lastName;
	private String email;
	private String password;
	private UserRole role;
	
}
