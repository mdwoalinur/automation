export interface Product {
  product_id: number;
  company_id: number;
  category_id: number;
  product_code: string;
  sku: string;
  product_name: string;
  description: string;
  base_unit_id: number;
  buying_price: number;
  selling_price: number;
  tax_rate: number;
  min_stock_level: number;
  max_stock_level: number;
  reorder_level: number;
  status: 'ACTIVE' | 'INACTIVE';
  created_at: Date;
  updated_at: Date;
}