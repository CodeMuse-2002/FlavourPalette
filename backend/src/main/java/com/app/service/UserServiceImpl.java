package com.app.service;

import org.modelmapper.ModelMapper;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.UserDAO;
import com.app.dto.AuthRequest;
import com.app.dto.AuthResponse;
import com.app.dto.EditProfileDTO;
import com.app.dto.UserRegister;
import com.app.pojos.CustomUserDetails;
import com.app.pojos.User;
import com.app.utils.JwtUtils;

import lombok.RequiredArgsConstructor;

@Service
@Transactional
@RequiredArgsConstructor
public class UserServiceImpl implements UserService{

	@Autowired
	private ModelMapper modelmapper;
	
	@Autowired
	private UserDAO userdao;
	
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;
    private final JwtUtils jwtUtils;
//	@Override
//	public UserRespDTO signIn(@Valid AuthRequest dto) {
//		User userEntity = userdao.findByEmailAndPassword(dto.getEmail(), dto.getPassword()).orElseThrow(() -> new ResourceNotFoundException("Invalid Email or Password"));
//		
//		return modelmapper.map(userEntity,UserRespDTO.class);
//	}

//	@Override
//	public ApiResponse register(UserRegister dto) {
//		User user = userdao.findByEmail(dto.getEmail());
//		if(user != null) {
//			return new ApiResponse("User already exists with email");
//		}
//		else {
//			User transientUser = modelmapper.map(dto, User.class);
//			transientUser.setRole(UserRole.CUSTOMER);
//			User persistentUser = userdao.save(transientUser);
//			return new ApiResponse("User registered successfully with user id = "+persistentUser.getId());
//		}
//		
//	}

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

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		User user = userdao.findByEmail(username);
		if(user == null) {
			throw new UsernameNotFoundException("User not found");
		}
		return new CustomUserDetails(user);
	}

	@Override
	public AuthResponse signIn(AuthRequest request) {
		try {
            authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword())
            );
            String token = jwtUtils.generateToken(request.getEmail(),request.getRole());
            return new AuthResponse(token, "Sign-in successful");
        } catch (AuthenticationException e) {
            return new AuthResponse(null, "Invalid credentials");
        }
	}

	@Override
	public AuthResponse register(UserRegister dto) {
		User user = new User();
	    user.setEmail(dto.getEmail());
	    user.setPassword(passwordEncoder.encode(dto.getPassword()));
	    user.setRole(dto.getRole());
	    userdao.save(user);
		return new AuthResponse(null, "User Registered successfully");
	}

}
