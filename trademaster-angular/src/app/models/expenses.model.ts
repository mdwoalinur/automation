export interface Expense {
  expense_id: number;
  company_id: number;
  expense_date: Date;
  expense_category: string;
  amount: number;
  payment_method: 'CASH' | 'BANK';
  description: string;
  bill_no: string;
  paid_to: string;
  created_by: number;
  created_at: Date;
}

export class ExpenseModel implements Expense {
  expense_id: number = 0;
  company_id: number = 0;
  expense_date: Date = new Date();
  expense_category: string = '';
  amount: number = 0;
  payment_method: 'CASH' | 'BANK' = 'CASH';
  description: string = '';
  bill_no: string = '';
  paid_to: string = '';
  created_by: number = 0;
  created_at: Date = new Date();
}