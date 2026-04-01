package com.trademaster.ims.model;

import jakarta.persistence.*;
import org.springframework.data.annotation.CreatedDate;
import java.math.BigDecimal;
import java.time.LocalDateTime;

@Entity
@Table(name = "due_collections")
public class DueCollection {
    // Embedded enum
    public enum PaymentMethod { CASH, BANK, MOBILE_BANKING }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "collection_id")
    private Long collectionId;

    @Column(name = "sale_id", nullable = false)
    private Long saleId;

    @Column(name = "collection_date", nullable = false)
    private LocalDateTime collectionDate = LocalDateTime.now();

    @Column(name = "amount", nullable = false, precision = 15, scale = 2)
    private BigDecimal amount = BigDecimal.ZERO;

    @Enumerated(EnumType.STRING)
    @Column(name = "payment_method", nullable = false, length = 20)
    private PaymentMethod paymentMethod = PaymentMethod.CASH;

    @Column(name = "notes", columnDefinition = "TEXT")
    private String notes;

    @Column(name = "collected_by", nullable = false)
    private Long collectedBy;

    @CreatedDate
    @Column(name = "created_at", nullable = false, updatable = false)
    private LocalDateTime createdAt;

    // Getters and setters
}