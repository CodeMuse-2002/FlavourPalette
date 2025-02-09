package com.app.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Setter
@Getter
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class AddressDTO {
	private String addressLine1;
	private String addressLine2;
	private String city;
	private String state;
	private String country;
	private String zipcode;
}
