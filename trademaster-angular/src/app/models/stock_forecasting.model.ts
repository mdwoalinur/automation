export interface StockForecast {
  forecast_id: number;
  company_id: number;
  product_id: number;
  warehouse_id: number;
  forecast_date: Date;
  predicted_demand: number;
  safety_stock: number;
  recommended_order_qty: number;
  created_at: Date;
  updated_at: Date;
}

export class StockForecastModel implements StockForecast {
  forecast_id: number = 0;
  company_id: number = 0;
  product_id: number = 0;
  warehouse_id: number = 0;
  forecast_date: Date = new Date();
  predicted_demand: number = 0;
  safety_stock: number = 0;
  recommended_order_qty: number = 0;
  created_at: Date = new Date();
  updated_at: Date = new Date();
}