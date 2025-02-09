package com.app.dto;

import com.app.pojos.Address;
import com.app.pojos.AdhaarCard;
import com.app.pojos.UserRole;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserRespDTO extends BaseDTO{
	private String firstName;
	private String lastName;
	private String email;
	private UserRole role;
    private AdhaarCard card;
	private Address address;
	
}
