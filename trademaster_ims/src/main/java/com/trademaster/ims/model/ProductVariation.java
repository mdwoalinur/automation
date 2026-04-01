package com.trademaster.ims.model;

import jakarta.persistence.*;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import java.math.BigDecimal;
import java.time.LocalDateTime;

@Entity
@Table(name = "product_variations")
public class ProductVariation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "variation_id")
    private Long variationId;

    @Column(name = "product_id", nullable = false)
    private Long productId;

    @Column(name = "variation_name", length = 100)
    private String variationName;

    @Column(name = "sku", nullable = false, unique = true, length = 100)
    private String sku;

    @Column(name = "buying_price", precision = 15, scale = 2)
    private BigDecimal buyingPrice = BigDecimal.ZERO;

    @Column(name = "additional_price", precision = 15, scale = 2)
    private BigDecimal additionalPrice = BigDecimal.ZERO;

    @Column(name = "image_url", length = 500)
    private String imageUrl;

    @Column(name = "status")
    private Boolean status = true;

    @CreatedDate
    @Column(name = "created_at", nullable = false, updatable = false)
    private LocalDateTime createdAt;

    @LastModifiedDate
    @Column(name = "updated_at")
    private LocalDateTime updatedAt;

    // Getters and setters
}