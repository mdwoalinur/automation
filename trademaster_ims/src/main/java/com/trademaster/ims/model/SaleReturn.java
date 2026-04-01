package com.trademaster.ims.model;

import jakarta.persistence.*;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import java.math.BigDecimal;
import java.time.LocalDateTime;

@Entity
@Table(name = "sales_returns")
public class SaleReturn {
    // Embedded enums
    public enum ReturnStatus { PENDING, APPROVED, REJECTED, COMPLETED }
    public enum ReturnType { FULL, PARTIAL }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "return_id")
    private Long returnId;

    @Column(name = "sale_id", nullable = false)
    private Long saleId;

    @Column(name = "return_no", nullable = false, unique = true, length = 100)
    private String returnNo;

    @Column(name = "return_date", nullable = false)
    private LocalDateTime returnDate = LocalDateTime.now();

    @Column(name = "customer_id", nullable = false)
    private Long customerId;

    @Column(name = "warehouse_id", nullable = false)
    private Long warehouseId;

    @Column(name = "total_return_amount", nullable = false, precision = 15, scale = 2)
    private BigDecimal totalReturnAmount = BigDecimal.ZERO;

    @Column(name = "refund_amount", precision = 15, scale = 2)
    private BigDecimal refundAmount = BigDecimal.ZERO;

    @Column(name = "exchange_amount", precision = 15, scale = 2)
    private BigDecimal exchangeAmount = BigDecimal.ZERO;

    @Column(name = "reason", columnDefinition = "TEXT")
    private String reason;

    @Enumerated(EnumType.STRING)
    @Column(name = "return_type", nullable = false, length = 10)
    private ReturnType returnType = ReturnType.FULL;

    @Enumerated(EnumType.STRING)
    @Column(name = "status", nullable = false, length = 20)
    private ReturnStatus status = ReturnStatus.PENDING;

    @Column(name = "approved_by")
    private Long approvedBy;

    @Column(name = "notes", columnDefinition = "TEXT")
    private String notes;

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