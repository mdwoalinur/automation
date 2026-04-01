package com.trademaster.ims.model;

import jakarta.persistence.*;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import java.math.BigDecimal;
import java.time.LocalDateTime;

@Entity
@Table(name = "units")
public class Unit {
    // Embedded enum
    public enum UnitType {
        WEIGHT, LENGTH, VOLUME, PIECE, TIME, OTHER
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "unit_id")
    private Long unitId;

    @Column(name = "unit_name", nullable = false, length = 50)
    private String unitName;

    @Column(name = "unit_code", nullable = false, unique = true, length = 20)
    private String unitCode;

    @Enumerated(EnumType.STRING)
    @Column(name = "unit_type", nullable = false, length = 20)
    private UnitType unitType = UnitType.PIECE;

    @Column(name = "base_unit_id")
    private Long baseUnitId;

    @Column(name = "conversion_factor", precision = 20, scale = 10)
    private BigDecimal conversionFactor = BigDecimal.ONE;

    @Column(name = "is_base")
    private Boolean isBase = false;

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