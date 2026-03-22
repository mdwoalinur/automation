export type PaymentType = 'SALE' | 'PURCHASE' | 'EXPENSE';
export type PaymentMethod = 'CASH' | 'BANK' | 'MOBILE_BANKING' | 'CHEQUE';
export type PaymentStatusExtended = 'PAID' | 'UNPAID' | 'PARTIAL' | 'REFUNDED';

export interface Payment {
  payment_id: number;
  company_id: number;
  payment_type: PaymentType;
  reference_id: number;
  payment_date: Date;
  payment_status: PaymentStatusExtended;
  amount: number;
  payment_method: PaymentMethod;
  reference_no: string;
  notes: string;
  received_by: number;
  created_at: Date;
}

export class PaymentModel implements Payment {
  payment_id: number = 0;
  company_id: number = 0;
  payment_type: PaymentType = 'SALE';
  reference_id: number = 0;
  payment_date: Date = new Date();
  payment_status: PaymentStatusExtended = 'UNPAID';
  amount: number = 0;
  payment_method: PaymentMethod = 'CASH';
  reference_no: string = '';
  notes: string = '';
  received_by: number = 0;
  created_at: Date = new Date();
}