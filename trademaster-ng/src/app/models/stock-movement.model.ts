
export type StockMovementType = 'PURCHASE' | 'SALE' | 'RETURN' | 'ADJUSTMENT' | 'TRANSFER';

export interface IStockMovement {
  movement_id: number;
  product_id: number;
  warehouse_id: number;
  movement_type: StockMovementType;
  reference_id: number;
  reference_no: string;
  quantity: number;
  previous_stock: number;
  new_stock: number;
  notes: string;
  created_by: number;
  created_at: Date;
}

export class StockMovement implements IStockMovement {
  movement_id: number = 0;
  product_id: number = 0;
  warehouse_id: number = 0;
  movement_type: StockMovementType = 'PURCHASE';
  reference_id: number = 0;
  reference_no: string = '';
  quantity: number = 0;
  previous_stock: number = 0;
  new_stock: number = 0;
  notes: string = '';
  created_by: number = 0;
  created_at: Date = new Date();
}