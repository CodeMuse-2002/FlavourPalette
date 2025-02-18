package com.app.service;
import org.springframework.security.core.userdetails.UserDetailsService;

import com.app.dto.ApiResponse;
import com.app.dto.AuthRequest;
import com.app.dto.AuthResponse;
import com.app.dto.EditProfileDTO;
import com.app.dto.UserRegister;
import com.app.dto.UserRespDTO;

import jakarta.validation.Valid;

public interface UserService extends UserDetailsService{

	AuthResponse signIn(AuthRequest request);
//	UserRespDTO signIn(@Valid AuthRequest dto);

//	ApiResponse register(UserRegister dto);

	AuthResponse register(UserRegister dto);
	EditProfileDTO editProfile(EditProfileDTO dto, Integer id);

}
