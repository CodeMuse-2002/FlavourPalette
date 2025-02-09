package com.app.dto;

import java.util.Objects;

import com.app.pojos.ProductCategory;

import lombok.Getter;
import lombok.Setter;
@Setter
@Getter
public class ProductRsDTO {
	private ProductCategory category;
	
	@Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        ProductRsDTO that = (ProductRsDTO) o;
        return Objects.equals(category, that.category); // Compare by ID, adjust if needed
    }

    @Override
    public int hashCode() {
        return Objects.hash(category);
    }
}
