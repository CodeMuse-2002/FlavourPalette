package com.app.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.pojos.Order;

public interface OrderDAO extends JpaRepository<Order, Long>{
	List<Order> findByCustomerId(Long id);
}
