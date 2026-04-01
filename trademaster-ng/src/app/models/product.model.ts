
export type ProductStatus = 'ACTIVE' | 'INACTIVE';

export interface IProduct {
  product_id: number;
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
  status: ProductStatus;
  created_at: Date;
  updated_at: Date;
}

export class Product implements IProduct {
  product_id: number = 0;
  category_id: number = 0;
  product_code: string = '';
  sku: string = '';
  product_name: string = '';
  description: string = '';
  base_unit_id: number = 0;
  buying_price: number = 0;
  selling_price: number = 0;
  tax_rate: number = 0;
  min_stock_level: number = 0;
  max_stock_level: number = 0;
  reorder_level: number = 0;
  status: ProductStatus = 'ACTIVE';
  created_at: Date = new Date();
  updated_at: Date = new Date();
}