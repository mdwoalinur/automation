
export type PaymentMethod = 'CASH' | 'BANK' | 'MOBILE_BANKING';

export interface IDueCollection {
  collection_id: number;
  sale_id: number;
  collection_date: Date;
  amount: number;
  payment_method: PaymentMethod;
  notes: string;
  collected_by: number;
  created_at: Date;
}

export class DueCollection implements IDueCollection {
  collection_id: number = 0;
  sale_id: number = 0;
  collection_date: Date = new Date();
  amount: number = 0;
  payment_method: PaymentMethod = 'CASH';
  notes: string = '';
  collected_by: number = 0;
  created_at: Date = new Date();
}