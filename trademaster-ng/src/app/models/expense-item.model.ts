
export interface IExpenseItem {
  expense_item_id: number;
  expense_id: number;
  exp_category_id: number;
  item_name: string;
  description: string;
  quantity: number;
  unit_price: number;
  discount_percent: number;
  discount_amount: number;
  tax_rate: number;
  tax_amount: number;
  total_price: number;
  notes: string;
}

export class ExpenseItem implements IExpenseItem {
  expense_item_id: number = 0;
  expense_id: number = 0;
  exp_category_id: number = 0;
  item_name: string = '';
  description: string = '';
  quantity: number = 0;
  unit_price: number = 0;
  discount_percent: number = 0;
  discount_amount: number = 0;
  tax_rate: number = 0;
  tax_amount: number = 0;
  total_price: number = 0;
  notes: string = '';
}