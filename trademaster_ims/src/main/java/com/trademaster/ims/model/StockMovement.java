package com.trademaster.ims.model;

import jakarta.persistence.*;
import org.springframework.data.annotation.CreatedDate;
import java.time.LocalDateTime;

@Entity
@Table(name = "stock_movements")
public class StockMovement {
    // Embedded enum
    public enum MovementType {
        PURCHASE, SALE, RETURN, ADJUSTMENT, TRANSFER
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "movement_id")
    private Long movementId;

    @Column(name = "product_id", nullable = false)
    private Long productId;

    @Column(name = "warehouse_id", nullable = false)
    private Long warehouseId;

    @Enumerated(EnumType.STRING)
    @Column(name = "movement_type", nullable = false, length = 20)
    private MovementType movementType = MovementType.PURCHASE;

    @Column(name = "reference_id")
    private Long referenceId;

    @Column(name = "reference_no", length = 100)
    private String referenceNo;

    @Column(name = "quantity", nullable = false)
    private Integer quantity = 0;

    @Column(name = "previous_stock", nullable = false)
    private Integer previousStock = 0;

    @Column(name = "new_stock", nullable = false)
    private Integer newStock = 0;

    @Column(name = "notes", columnDefinition = "TEXT")
    private String notes;

    @Column(name = "created_by", nullable = false)
    private Long createdBy;

    @CreatedDate
    @Column(name = "created_at", nullable = false, updatable = false)
    private LocalDateTime createdAt;

    // Getters and setters
}