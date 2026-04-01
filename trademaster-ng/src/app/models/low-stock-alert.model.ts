// low-stock-alert.model.ts
export interface ILowStockAlert {
  alert_id: number;
  product_id: number;
  warehouse_id: number;
  reorder_level: number;
  current_quantity: number;
  alert_sent: boolean;
  sent_at: Date | null;
}

export class LowStockAlert implements ILowStockAlert {
  alert_id: number = 0;
  product_id: number = 0;
  warehouse_id: number = 0;
  reorder_level: number = 0;
  current_quantity: number = 0;
  alert_sent: boolean = false;
  sent_at: Date | null = null;
}