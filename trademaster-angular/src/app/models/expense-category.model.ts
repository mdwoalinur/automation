// src/app/models/expense-category.model.ts

export interface IExpenseCategory {
  id: number;
  company_id: number;
  name: string;
  description?: string;
  created_by: number;
  created_at: Date;
  updated_at: Date;
  status: number;
}

export class ExpenseCategory implements IExpenseCategory {
  id: number = 0;
  company_id: number = 0;
  name: string = '';
  description: string = '';
  created_by: number = 0;
  created_at: Date = new Date();
  updated_at: Date = new Date();
  status: number = 1;
}