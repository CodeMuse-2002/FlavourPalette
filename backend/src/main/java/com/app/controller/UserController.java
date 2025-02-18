package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.AuthRequest;
import com.app.dto.AuthResponse;
import com.app.dto.EditProfileDTO;
import com.app.dto.UserRegister;
import com.app.service.UserService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/users")

public class UserController {
	@Autowired
	private UserService userService;

//	@CrossOrigin(origins = "http://localhost:3000")
//	@PostMapping("/signin")
//	public ResponseEntity<?> userSignIn(@RequestBody @Valid AuthRequest dto){
//		System.out.println("in user sign in");
//		return ResponseEntity.ok(userService.signIn(dto));
//	}
	
	@CrossOrigin(origins = "http://localhost:3000")
	@PostMapping("/signin")
	public ResponseEntity<?> userSignIn(@RequestBody @Valid AuthRequest dto){
	    System.out.println("In user sign-in");
	    AuthResponse response = userService.signIn(dto);
	    return ResponseEntity.ok(response);
	}
	
	@CrossOrigin(origins = "http://localhost:3000")
	@PostMapping("/register")
	public ResponseEntity<?> userRegistration(@RequestBody UserRegister dto){
		System.out.println("in user register");
		return ResponseEntity.ok(userService.register(dto));
	}
	
//	@CrossOrigin(origins = "http://localhost:3000")
//	@GetMapping("/profile/{}")
//	public ResponseEntity<?> userProfile(){
//		System.out.println("In user profile");
//		try {
//			return ResponseEntity.status(HttpStatus.OK).body(userService.getProfile());
//		}catch(RuntimeException e) {
//			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new ApiResponse(e.getMessage()));
//		}
//	}
	
	@CrossOrigin(origins = "http://localhost:3000")
	@PutMapping("/{id}")
	public ResponseEntity<?> editProfile(@RequestBody EditProfileDTO dto, @PathVariable Integer id){
		System.out.println("in edit profile");
		return ResponseEntity.ok(userService.editProfile(dto,id));
	}
}