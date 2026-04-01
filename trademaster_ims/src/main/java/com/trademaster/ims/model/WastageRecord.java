package com.trademaster.ims.model;

import jakarta.persistence.*;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Table(name = "wastage_records")
public class WastageRecord {
    // Embedded enums
    public enum WastageType {
        PRODUCTION, STORAGE, HANDLING, EXPIRED, DAMAGED, RETURN, OTHER
    }
    public enum Status { PENDING, APPROVED, REJECTED }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "wastage_id")
    private Long wastageId;

    @Column(name = "product_id", nullable = false)
    private Long productId;

    @Column(name = "warehouse_id", nullable = false)
    private Long warehouseId;

    @Enumerated(EnumType.STRING)
    @Column(name = "wastage_type", nullable = false, length = 20)
    private WastageType wastageType = WastageType.OTHER;

    @Column(name = "quantity", nullable = false, precision = 15, scale = 3)
    private BigDecimal quantity = BigDecimal.ZERO;

    @Column(name = "unit_id", nullable = false)
    private Long unitId;

    @Column(name = "wastage_date", nullable = false)
    private LocalDate wastageDate = LocalDate.now();

    @Column(name = "reason", columnDefinition = "TEXT")
    private String reason;

    @Column(name = "batch_no", length = 100)
    private String batchNo;

    @Column(name = "manufacturing_date")
    private LocalDate manufacturingDate;

    @Column(name = "expiry_date")
    private LocalDate expiryDate;

    @Column(name = "responsible_person")
    private Long responsiblePerson;

    @Column(name = "approved_by")
    private Long approvedBy;

    @Column(name = "financial_loss", precision = 15, scale = 2)
    private BigDecimal financialLoss = BigDecimal.ZERO;

    @Column(name = "recovery_amount", precision = 15, scale = 2)
    private BigDecimal recoveryAmount = BigDecimal.ZERO;

    @Column(name = "notes", columnDefinition = "TEXT")
    private String notes;

    @Enumerated(EnumType.STRING)
    @Column(name = "status", nullable = false, length = 20)
    private Status status = Status.PENDING;

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