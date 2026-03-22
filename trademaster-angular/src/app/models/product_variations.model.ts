export interface ProductVariation {
  variation_id: number;
  company_id: number;
  product_id: number;
  buying_price: number;
  variation_name: string;
  sku: string;
  additional_price: number;
  image_url: string;
  status: boolean;
  created_at: Date;
  updated_at: Date;
}

export class ProductVariationModel implements ProductVariation {
  variation_id: number = 0;
  company_id: number = 0;
  product_id: number = 0;
  buying_price: number = 0;
  variation_name: string = '';
  sku: string = '';
  additional_price: number = 0;
  image_url: string = '';
  status: boolean = true;
  created_at: Date = new Date();
  updated_at: Date = new Date();
}