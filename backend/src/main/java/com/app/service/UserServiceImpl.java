package com.app.service;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.UserDAO;
import com.app.dto.ApiResponse;
import com.app.dto.AuthRequest;
import com.app.dto.EditProfileDTO;
import com.app.dto.UserRegister;
import com.app.dto.UserRespDTO;
import com.app.exception.ResourceNotFoundException;
import com.app.pojos.User;
import com.app.pojos.UserRole;

import jakarta.validation.Valid;

@Service
@Transactional
public class UserServiceImpl implements UserService{

	@Autowired
	private ModelMapper modelmapper;
	
	@Autowired
	private UserDAO userdao;
	
	@Override
	public UserRespDTO signIn(@Valid AuthRequest dto) {
		User userEntity = userdao.findByEmailAndPassword(dto.getEmail(), dto.getPassword()).orElseThrow(() -> new ResourceNotFoundException("Invalid Email or Password"));
		
		return modelmapper.map(userEntity,UserRespDTO.class);
	}

	@Override
	public ApiResponse register(UserRegister dto) {
		User user = userdao.findByEmail(dto.getEmail());
		if(user != null) {
			return new ApiResponse("User already exists with email");
		}
		else {
			User transientUser = modelmapper.map(dto, User.class);
			transientUser.setRole(UserRole.CUSTOMER);
			User persistentUser = userdao.save(transientUser);
			return new ApiResponse("User registered successfully with user id = "+persistentUser.getId());
		}
		
	}

	@Override
	public EditProfileDTO editProfile(EditProfileDTO dto, Integer id) {
		User user = userdao.findById(id);
		if(user != null) {
			User transientUser = modelmapper.map(dto, User.class);
			User persistentUser = userdao.save(transientUser);
			return modelmapper.map(persistentUser, EditProfileDTO.class);
		}
		return null;
	}

}
