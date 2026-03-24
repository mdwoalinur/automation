import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from './base.service';
import { Inventory, StockMovement, StockAdjustment, LowStockAlert, StockForecast } from '../models';

@Injectable({
  providedIn: 'root'
})
export class InventoryService extends BaseService {
  constructor(http: HttpClient) {
    super(http, 'inventory');
  }

  // Stock Operations
  getStockByWarehouse(warehouseId: number): Observable<Inventory[]> {
    return this.http.get<Inventory[]>(`${this.apiUrl}/warehouse/${warehouseId}`, { headers: this.getHeaders() });
  }

  getStockByProduct(productId: number): Observable<Inventory[]> {
    return this.http.get<Inventory[]>(`${this.apiUrl}/product/${productId}`, { headers: this.getHeaders() });
  }

  getStockByCompany(companyId: number): Observable<Inventory[]> {
    return this.http.get<Inventory[]>(`${this.apiUrl}/company/${companyId}`, { headers: this.getHeaders() });
  }

  updateStock(productId: number, warehouseId: number, quantity: number): Observable<any> {
    return this.http.put(`${this.apiUrl}/update`, { productId, warehouseId, quantity }, { headers: this.getHeaders() });
  }

  // Stock Movements
  getStockMovements(productId: number): Observable<StockMovement[]> {
    return this.http.get<StockMovement[]>(`${this.apiUrl}/movements/${productId}`, { headers: this.getHeaders() });
  }

  getStockMovementsByDateRange(startDate: Date, endDate: Date): Observable<StockMovement[]> {
    return this.http.get<StockMovement[]>(`${this.apiUrl}/movements/date?from=${startDate}&to=${endDate}`, { headers: this.getHeaders() });
  }

  // Stock Adjustments
  createStockAdjustment(adjustment: StockAdjustment): Observable<any> {
    return this.http.post(`${this.apiUrl}/adjustments`, adjustment, { headers: this.getHeaders() });
  }

  getPendingAdjustments(): Observable<StockAdjustment[]> {
    return this.http.get<StockAdjustment[]>(`${this.apiUrl}/adjustments/pending`, { headers: this.getHeaders() });
  }

  approveAdjustment(adjustmentId: number, approvedBy: number): Observable<any> {
    return this.http.put(`${this.apiUrl}/adjustments/${adjustmentId}/approve`, { approvedBy }, { headers: this.getHeaders() });
  }

  rejectAdjustment(adjustmentId: number, reason: string): Observable<any> {
    return this.http.put(`${this.apiUrl}/adjustments/${adjustmentId}/reject`, { reason }, { headers: this.getHeaders() });
  }

  // Low Stock Alerts
  getLowStockAlerts(): Observable<LowStockAlert[]> {
    return this.http.get<LowStockAlert[]>(`${this.apiUrl}/alerts/low-stock`, { headers: this.getHeaders() });
  }

  getExpiryAlerts(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/alerts/expiry`, { headers: this.getHeaders() });
  }

  markAlertAsSent(alertId: number): Observable<any> {
    return this.http.put(`${this.apiUrl}/alerts/${alertId}/mark-sent`, {}, { headers: this.getHeaders() });
  }

  // Stock Forecasting
  getForecast(productId: number): Observable<StockForecast[]> {
    return this.http.get<StockForecast[]>(`${this.apiUrl}/forecast/${productId}`, { headers: this.getHeaders() });
  }

  generateForecast(productId: number, days: number): Observable<StockForecast> {
    return this.http.post<StockForecast>(`${this.apiUrl}/forecast/generate`, { productId, days }, { headers: this.getHeaders() });
  }

  // Stock Transfers
  transferStock(fromWarehouseId: number, toWarehouseId: number, productId: number, quantity: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/transfer`, { fromWarehouseId, toWarehouseId, productId, quantity }, { headers: this.getHeaders() });
  }

  getTransferHistory(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/transfers`, { headers: this.getHeaders() });
  }

  // Stock Valuation
  getStockValue(companyId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/valuation/${companyId}`, { headers: this.getHeaders() });
  }

  getStockValueByWarehouse(warehouseId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/valuation/warehouse/${warehouseId}`, { headers: this.getHeaders() });
  }

  // Physical Count
  startPhysicalCount(warehouseId: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/physical-count/start`, { warehouseId }, { headers: this.getHeaders() });
  }

  submitPhysicalCount(counts: any[]): Observable<any> {
    return this.http.post(`${this.apiUrl}/physical-count/submit`, counts, { headers: this.getHeaders() });
  }
}