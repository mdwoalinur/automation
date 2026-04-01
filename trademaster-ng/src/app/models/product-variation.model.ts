
export interface IProductVariation {
  variation_id: number;
  product_id: number;
  variation_name: string;
  sku: string;
  buying_price: number;
  additional_price: number;
  image_url: string;
  status: boolean;
  created_at: Date;
  updated_at: Date;
}

export class ProductVariation implements IProductVariation {
  variation_id: number = 0;
  product_id: number = 0;
  variation_name: string = '';
  sku: string = '';
  buying_price: number = 0;
  additional_price: number = 0;
  image_url: string = '';
  status: boolean = true;
  created_at: Date = new Date();
  updated_at: Date = new Date();
}