
export type ItemCondition = 'GOOD' | 'DAMAGED' | 'EXPIRED';
export type ActionTaken = 'REFUND' | 'EXCHANGE' | 'STORE_CREDIT';

export interface ISaleReturnItem {
  return_item_id: number;
  return_id: number;
  sales_item_id: number;
  product_id: number;
  returned_quantity: number;
  unit_price: number;
  refund_amount: number;
  reason: string;
  condition: ItemCondition;
  action_taken: ActionTaken;
  created_at: Date;
}

export class SaleReturnItem implements ISaleReturnItem {
  return_item_id: number = 0;
  return_id: number = 0;
  sales_item_id: number = 0;
  product_id: number = 0;
  returned_quantity: number = 0;
  unit_price: number = 0;
  refund_amount: number = 0;
  reason: string = '';
  condition: ItemCondition = 'GOOD';
  action_taken: ActionTaken = 'REFUND';
  created_at: Date = new Date();
}