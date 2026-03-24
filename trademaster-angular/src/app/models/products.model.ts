export interface Product {
  product_id: number;
  company_id: number;
  category_id: number;
  product_code: string;
  sku: string;
  product_name: string;
  description: string;
  unit_type: string;
  buying_price: number;
  selling_price: number;
  tax_rate: number;
  min_stock_level: number;
  max_stock_level: number;
  reorder_level: number;
  quantity: number;  // from inventory join
  image_url: string;
  status: 'ACTIVE' | 'INACTIVE';
  created_at: Date;
  updated_at: Date;
}

export class Product implements Product {
  product_id: number = 0;
  company_id: number = 0;
  category_id: number = 0;
  product_code: string = '';
  sku: string = '';
  product_name: string = '';
  description: string = '';
  unit_type: string = 'pcs';
  buying_price: number = 0;
  selling_price: number = 0;
  tax_rate: number = 0;
  min_stock_level: number = 10;
  max_stock_level: number = 100;
  reorder_level: number = 20;
  quantity: number = 0;
  image_url: string = '';
  status: 'ACTIVE' | 'INACTIVE' = 'ACTIVE';
  created_at: Date = new Date();
  updated_at: Date = new Date();
}