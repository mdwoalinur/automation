
export type WastageType = 'PRODUCTION' | 'STORAGE' | 'HANDLING' | 'EXPIRED' | 'DAMAGED' | 'RETURN' | 'OTHER';
export type WastageRecordStatus = 'PENDING' | 'APPROVED' | 'REJECTED';

export interface IWastageRecord {
  wastage_id: number;
  product_id: number;
  warehouse_id: number;
  wastage_type: WastageType;
  quantity: number;
  unit_id: number;
  wastage_date: Date;
  reason: string;
  batch_no: string;
  manufacturing_date: Date | null;
  expiry_date: Date | null;
  responsible_person: number | null;
  approved_by: number | null;
  financial_loss: number;
  recovery_amount: number;
  notes: string;
  status: WastageRecordStatus;
  created_by: number;
  created_at: Date;
  updated_at: Date;
}

export class WastageRecord implements IWastageRecord {
  wastage_id: number = 0;
  product_id: number = 0;
  warehouse_id: number = 0;
  wastage_type: WastageType = 'OTHER';
  quantity: number = 0;
  unit_id: number = 0;
  wastage_date: Date = new Date();
  reason: string = '';
  batch_no: string = '';
  manufacturing_date: Date | null = null;
  expiry_date: Date | null = null;
  responsible_person: number | null = null;
  approved_by: number | null = null;
  financial_loss: number = 0;
  recovery_amount: number = 0;
  notes: string = '';
  status: WastageRecordStatus = 'PENDING';
  created_by: number = 0;
  created_at: Date = new Date();
  updated_at: Date = new Date();
}