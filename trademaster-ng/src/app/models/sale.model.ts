
export type PaymentStatus = 'PAID' | 'UNPAID' | 'PARTIAL';
export type SaleStatus = 'COMPLETED' | 'CANCELLED';

export interface ISale {
  sale_id: number;
  invoice_no: string;
  customer_id: number;
  warehouse_id: number;
  user_id: number;
  sale_date: Date;
  subtotal: number;
  discount_amount: number;
  tax_amount: number;
  total_amount: number;
  paid_amount: number;
  due_amount: number;
  payment_status: PaymentStatus;
  notes: string;
  status: SaleStatus;
  created_at: Date;
}

export class Sale implements ISale {
  sale_id: number = 0;
  invoice_no: string = '';
  customer_id: number = 0;
  warehouse_id: number = 0;
  user_id: number = 0;
  sale_date: Date = new Date();
  subtotal: number = 0;
  discount_amount: number = 0;
  tax_amount: number = 0;
  total_amount: number = 0;
  paid_amount: number = 0;
  due_amount: number = 0;
  payment_status: PaymentStatus = 'UNPAID';
  notes: string = '';
  status: SaleStatus = 'COMPLETED';
  created_at: Date = new Date();
}