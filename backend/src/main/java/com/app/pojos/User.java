package com.app.pojos;
//ALTER TABLE users DROP CONSTRAINT users_chk_1;
import jakarta.persistence.Column;
import jakarta.persistence.Embedded;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Getter
@Setter
@NoArgsConstructor
@ToString(callSuper = true, exclude = {"password"})
@Table(name = "users")
public class User extends BaseEntity{
	@Column(name = "first_name", length = 20)
	private String firstName;
	@Column(name = "last_name", length = 20)
	private String lastName;
	@Column(length = 50, unique = true)
	private String email;
	@Column(length = 50, nullable = false)
	private String password;
	@Enumerated(EnumType.STRING)
	@Column(length = 50)
	private UserRole role;
	private boolean status;
	@Embedded
	private AdhaarCard card;
	
	@OneToOne
	@JoinColumn(name = "address_id")
	private Address address;
	
	public User(String firstName, String lastName, String email, String password, UserRole role) {
		super();
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.password = password;
		this.role = role;
	}
	
	
	
}
