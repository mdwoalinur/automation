export type AdjustmentStatus = 'PENDING' | 'APPROVED' | 'REJECTED';

export interface StockAdjustment {
  adjustment_id: number;
  company_id: number;
  product_id: number;
  warehouse_id: number;
  system_quantity: number;
  physical_quantity: number;
  difference: number;
  reason: string;
  adjustment_date: Date;
  approved_by: number;
  status: AdjustmentStatus;
  notes: string;
  created_at: Date;
}

export class StockAdjustmentModel implements StockAdjustment {
  adjustment_id: number = 0;
  company_id: number = 0;
  product_id: number = 0;
  warehouse_id: number = 0;
  system_quantity: number = 0;
  physical_quantity: number = 0;
  difference: number = 0;
  reason: string = '';
  adjustment_date: Date = new Date();
  approved_by: number = 0;
  status: AdjustmentStatus = 'PENDING';
  notes: string = '';
  created_at: Date = new Date();
}