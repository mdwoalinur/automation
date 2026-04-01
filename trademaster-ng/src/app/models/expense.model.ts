
export type PaymentStatus = 'PAID' | 'UNPAID' | 'PARTIAL';
export type PaymentMethod = 'CASH' | 'BANK' | 'MOBILE_BANKING' | 'CHEQUE';
export type ExpenseStatus = 'DRAFT' | 'SUBMITTED' | 'APPROVED' | 'REJECTED';

export interface IExpense {
  expense_id: number;
  expense_no: string;
  expense_date: Date;
  vendor_id: number | null;
  total_amount: number;
  discount_amount: number;
  tax_amount: number;
  grand_total: number;
  payment_status: PaymentStatus;
  payment_method: PaymentMethod;
  reference_no: string;
  notes: string;
  approved_by: number | null;
  status: ExpenseStatus;
  created_by: number;
  created_at: Date;
  updated_at: Date;
}

export class Expense implements IExpense {
  expense_id: number = 0;
  expense_no: string = '';
  expense_date: Date = new Date();
  vendor_id: number | null = null;
  total_amount: number = 0;
  discount_amount: number = 0;
  tax_amount: number = 0;
  grand_total: number = 0;
  payment_status: PaymentStatus = 'UNPAID';
  payment_method: PaymentMethod = 'CASH';
  reference_no: string = '';
  notes: string = '';
  approved_by: number | null = null;
  status: ExpenseStatus = 'DRAFT';
  created_by: number = 0;
  created_at: Date = new Date();
  updated_at: Date = new Date();
}