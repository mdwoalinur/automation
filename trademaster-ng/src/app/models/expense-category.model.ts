
export interface IExpenseCategory {
  exp_category_id: number;
  category_name: string;
  category_code: string;
  parent_category_id: number | null;
  description: string;
  status: boolean;
  created_at: Date;
  updated_at: Date;
}

export class ExpenseCategory implements IExpenseCategory {
  exp_category_id: number = 0;
  category_name: string = '';
  category_code: string = '';
  parent_category_id: number | null = null;
  description: string = '';
  status: boolean = true;
  created_at: Date = new Date();
  updated_at: Date = new Date();
}