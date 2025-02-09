package com.app.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.pojos.User;

public interface UserDAO extends JpaRepository<User, Long>{

	Optional<User> findByEmailAndPassword(String email, String password);

	User findByEmail(String email);
	User findById(Integer id);

//	User findById(Long userId);
}
