package com.app.dto;

import com.app.pojos.Address;
import com.app.pojos.AdhaarCard;
import com.app.pojos.UserRole;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class EditProfileDTO {
	private String firstName;
	private String lastName;
	private UserRole role;
    private AdhaarCard card;
	private Address address;
}
