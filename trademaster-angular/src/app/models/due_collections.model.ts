export interface DueCollection {
  collection_id: number;
  company_id: number;
  sale_id: number;
  collection_date: Date;
  amount: number;
  payment_method: 'CASH' | 'BANK' | 'MOBILE_BANKING';
  notes: string;
  collected_by: number;
  created_at: Date;
}

export class DueCollectionModel implements DueCollection {
  collection_id: number = 0;
  company_id: number = 0;
  sale_id: number = 0;
  collection_date: Date = new Date();
  amount: number = 0;
  payment_method: 'CASH' | 'BANK' | 'MOBILE_BANKING' = 'CASH';
  notes: string = '';
  collected_by: number = 0;
  created_at: Date = new Date();
}