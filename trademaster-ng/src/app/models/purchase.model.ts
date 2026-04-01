
export type PaymentStatus = 'PAID' | 'UNPAID' | 'PARTIAL';
export type PurchaseStatus = 'PENDING' | 'RECEIVED' | 'CANCELLED';

export interface IPurchase {
  purchase_id: number;
  purchase_order_no: string;
  supplier_id: number;
  warehouse_id: number;
  user_id: number;
  purchase_date: Date;
  expected_delivery: Date | null;
  actual_delivery: Date | null;
  subtotal: number;
  discount_amount: number;
  tax_amount: number;
  total_amount: number;
  paid_amount: number;
  due_amount: number;
  payment_status: PaymentStatus;
  status: PurchaseStatus;
  notes: string;
  created_at: Date;
  updated_at: Date;
}

export class Purchase implements IPurchase {
  purchase_id: number = 0;
  purchase_order_no: string = '';
  supplier_id: number = 0;
  warehouse_id: number = 0;
  user_id: number = 0;
  purchase_date: Date = new Date();
  expected_delivery: Date | null = null;
  actual_delivery: Date | null = null;
  subtotal: number = 0;
  discount_amount: number = 0;
  tax_amount: number = 0;
  total_amount: number = 0;
  paid_amount: number = 0;
  due_amount: number = 0;
  payment_status: PaymentStatus = 'UNPAID';
  status: PurchaseStatus = 'PENDING';
  notes: string = '';
  created_at: Date = new Date();
  updated_at: Date = new Date();
}