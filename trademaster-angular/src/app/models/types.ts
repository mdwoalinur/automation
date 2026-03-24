// src/app/models/types.ts

export type PaymentStatus = 'PAID' | 'UNPAID' | 'PARTIAL';
export type SaleStatus = 'COMPLETED' | 'CANCELLED';
export type PurchaseStatus = 'PENDING' | 'RECEIVED' | 'CANCELLED';
export type UserRole = 'ADMIN' | 'MANAGER' | 'STAFF';
export type CustomerType = 'RETAIL' | 'WHOLESALE' | 'CORPORATE';
export type ProductStatus = 'ACTIVE' | 'INACTIVE';
export type MovementType = 'PURCHASE' | 'SALE' | 'RETURN' | 'ADJUSTMENT' | 'TRANSFER';
export type AdjustmentStatus = 'PENDING' | 'APPROVED' | 'REJECTED';
export type BatchStatus = 'FRESH' | 'NEAR_EXPIRY' | 'EXPIRED' | 'DEPLETED';
export type PaymentMethod = 'CASH' | 'BANK' | 'MOBILE_BANKING' | 'CHEQUE';
export type NotificationType = 'INFO' | 'WARNING' | 'SUCCESS' | 'ERROR';