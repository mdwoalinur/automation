export type BatchStatus = 'FRESH' | 'NEAR_EXPIRY' | 'EXPIRED' | 'DEPLETED';

export interface ProductBatch {
  batch_id: number;
  company_id: number;
  product_id: number;
  warehouse_id: number;
  batch_number: string;
  manufacturing_date: Date | null;
  expiry_date: Date | null;
  quantity: number;
  remaining_quantity: number;
  purchase_price: number;
  status: BatchStatus;
  created_at: Date;
  updated_at: Date;
}

export class ProductBatchModel implements ProductBatch {
  batch_id: number = 0;
  company_id: number = 0;
  product_id: number = 0;
  warehouse_id: number = 0;
  batch_number: string = '';
  manufacturing_date: Date | null = null;
  expiry_date: Date | null = null;
  quantity: number = 0;
  remaining_quantity: number = 0;
  purchase_price: number = 0;
  status: BatchStatus = 'FRESH';
  created_at: Date = new Date();
  updated_at: Date = new Date();
}