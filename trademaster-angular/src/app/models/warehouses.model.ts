export interface Warehouse {
  warehouse_id: number;
  company_id: number;
  warehouse_name: string;
  warehouse_code: string;
  location: string;
  manager_name: string;
  contact_number: string;
  is_active: boolean;
  created_at: Date;
}

export class WarehouseModel implements Warehouse {
  warehouse_id: number = 0;
  company_id: number = 0;
  warehouse_name: string = '';
  warehouse_code: string = '';
  location: string = '';
  manager_name: string = '';
  contact_number: string = '';
  is_active: boolean = true;
  created_at: Date = new Date();
}