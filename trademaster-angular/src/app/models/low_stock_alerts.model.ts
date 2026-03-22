export interface LowStockAlert {
  alert_id: number;
  company_id: number;
  product_id: number;
  warehouse_id: number;
  reorder_level: number;
  current_quantity: number;
  alert_sent: boolean;
  sent_at: Date | null;
}

export class LowStockAlertModel implements LowStockAlert {
  alert_id: number = 0;
  company_id: number = 0;
  product_id: number = 0;
  warehouse_id: number = 0;
  reorder_level: number = 0;
  current_quantity: number = 0;
  alert_sent: boolean = false;
  sent_at: Date | null = null;
}