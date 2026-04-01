package com.trademaster.ims.model;

import jakarta.persistence.*;
import org.springframework.data.annotation.CreatedDate;
import java.math.BigDecimal;
import java.time.LocalDateTime;

@Entity
@Table(name = "sales_return_items")
public class SaleReturnItem {
    // Embedded enums
    public enum ItemCondition { GOOD, DAMAGED, EXPIRED }
    public enum ActionTaken { REFUND, EXCHANGE, STORE_CREDIT }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "return_item_id")
    private Long returnItemId;

    @Column(name = "return_id", nullable = false)
    private Long returnId;

    @Column(name = "sales_item_id", nullable = false)
    private Long salesItemId;

    @Column(name = "product_id", nullable = false)
    private Long productId;

    @Column(name = "returned_quantity", nullable = false)
    private Integer returnedQuantity = 0;

    @Column(name = "unit_price", nullable = false, precision = 15, scale = 2)
    private BigDecimal unitPrice = BigDecimal.ZERO;

    @Column(name = "refund_amount", nullable = false, precision = 15, scale = 2)
    private BigDecimal refundAmount = BigDecimal.ZERO;

    @Column(name = "reason", columnDefinition = "TEXT")
    private String reason;

    @Enumerated(EnumType.STRING)
    @Column(name = "condition", nullable = false, length = 20)
    private ItemCondition condition = ItemCondition.GOOD;

    @Enumerated(EnumType.STRING)
    @Column(name = "action_taken", nullable = false, length = 20)
    private ActionTaken actionTaken = ActionTaken.REFUND;

    @CreatedDate
    @Column(name = "created_at", nullable = false, updatable = false)
    private LocalDateTime createdAt;

    // Getters and setters
}