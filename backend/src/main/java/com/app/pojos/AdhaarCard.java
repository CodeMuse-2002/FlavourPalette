package com.app.pojos;

import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;
import jakarta.persistence.Entity;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
@ToString
@Embeddable
public class AdhaarCard {
	@Column(name = "card_number", length = 20, unique = true)
	private String cardNumber;
	@Column(name = "card_created_on")
	private LocalDate createdOn;
}
