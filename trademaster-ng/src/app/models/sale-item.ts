
export interface ISaleItem {
  sales_item_id: number;
  sale_id: number;
  product_id: number;
  quantity: number;
  unit_price: number;
  tax_rate: number;
  discount_percent: number;
  discount_amount: number;
  total_price: number;
}

export class SaleItem implements ISaleItem {
  sales_item_id: number = 0;
  sale_id: number = 0;
  product_id: number = 0;
  quantity: number = 0;
  unit_price: number = 0;
  tax_rate: number = 0;
  discount_percent: number = 0;
  discount_amount: number = 0;
  total_price: number = 0;
}