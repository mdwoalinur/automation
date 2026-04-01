package com.trademaster.ims.model;

import jakarta.persistence.*;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import java.math.BigDecimal;
import java.time.LocalDateTime;

@Entity
@Table(name = "wastage_categories")
public class WastageCategory {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "category_id")
    private Long categoryId;

    @Column(name = "category_name", nullable = false, length = 100)
    private String categoryName;

    @Column(name = "category_code", nullable = false, unique = true, length = 50)
    private String categoryCode;

    @Column(name = "description", columnDefinition = "TEXT")
    private String description;

    @Column(name = "loss_percentage", precision = 5, scale = 2)
    private BigDecimal lossPercentage = BigDecimal.ZERO;

    @Column(name = "approval_required")
    private Boolean approvalRequired = false;

    @Column(name = "approval_level")
    private Integer approvalLevel = 0;

    @Column(name = "status")
    private Boolean status = true;

    @Column(name = "created_by", nullable = false)
    private Long createdBy;

    @CreatedDate
    @Column(name = "created_at", nullable = false, updatable = false)
    private LocalDateTime createdAt;

    @LastModifiedDate
    @Column(name = "updated_at")
    private LocalDateTime updatedAt;

    // Getters and setters
}