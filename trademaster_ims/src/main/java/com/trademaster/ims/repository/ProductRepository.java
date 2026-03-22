package com.trademaster.ims.repository;

import com.trademaster.ims.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product, Long> {
}