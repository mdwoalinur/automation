
export type ReturnStatus = 'PENDING' | 'APPROVED' | 'REJECTED' | 'COMPLETED';
export type ReturnType = 'FULL' | 'PARTIAL';

export interface ISaleReturn {
  return_id: number;
  sale_id: number;
  return_no: string;
  return_date: Date;
  customer_id: number;
  warehouse_id: number;
  total_return_amount: number;
  refund_amount: number;
  exchange_amount: number;
  reason: string;
  return_type: ReturnType;
  status: ReturnStatus;
  approved_by: number | null;
  notes: string;
  created_by: number;
  created_at: Date;
  updated_at: Date;
}

export class SaleReturn implements ISaleReturn {
  return_id: number = 0;
  sale_id: number = 0;
  return_no: string = '';
  return_date: Date = new Date();
  customer_id: number = 0;
  warehouse_id: number = 0;
  total_return_amount: number = 0;
  refund_amount: number = 0;
  exchange_amount: number = 0;
  reason: string = '';
  return_type: ReturnType = 'FULL';
  status: ReturnStatus = 'PENDING';
  approved_by: number | null = null;
  notes: string = '';
  created_by: number = 0;
  created_at: Date = new Date();
  updated_at: Date = new Date();
}