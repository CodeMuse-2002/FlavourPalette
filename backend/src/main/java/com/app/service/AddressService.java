package com.app.service;

import com.app.dto.AddressDTO;
import com.app.dto.ApiResponse;

public interface AddressService {
	ApiResponse assignAddress(AddressDTO dto, Long userId);
}
