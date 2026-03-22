export interface Inventory {
  inventory_id: number;
  company_id: number;
  warehouse_id: number;
  product_id: number;
  quantity: number;
  reserved_quantity: number;
  available_quantity: number;
  last_updated: Date;
}

export class InventoryModel implements Inventory {
  inventory_id: number = 0;
  company_id: number = 0;
  warehouse_id: number = 0;
  product_id: number = 0;
  quantity: number = 0;
  reserved_quantity: number = 0;
  available_quantity: number = 0;
  last_updated: Date = new Date();
}