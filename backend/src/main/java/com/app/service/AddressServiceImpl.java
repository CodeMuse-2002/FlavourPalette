package com.app.service;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.AddressDAO;
import com.app.dao.UserDAO;
import com.app.dto.AddressDTO;
import com.app.dto.ApiResponse;
import com.app.exception.ResourceNotFoundException;
import com.app.pojos.Address;
import com.app.pojos.User;

@Service
@Transactional
public class AddressServiceImpl implements AddressService{
	@Autowired
	private UserDAO userDAO;
	
	@Autowired
	private AddressDAO addressDAO;
	
	@Autowired
	private ModelMapper modelmapper;
	
	@Override
	public ApiResponse assignAddress(AddressDTO dto, Long userId) {
		User user = userDAO.findById(userId).orElseThrow(() -> new ResourceNotFoundException("Invalid User Id"));
		Address address = modelmapper.map(dto,Address.class);
		user.setAddress(address);
		Address persistentAdr = addressDAO.save(address);
		return new ApiResponse("Assign user address with userId = "+persistentAdr.getId());
	}

}
