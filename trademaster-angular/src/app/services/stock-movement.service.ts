import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from './base.service';
import { StockMovement } from '../models';

@Injectable({
  providedIn: 'root'
})
export class StockMovementService extends BaseService {
  constructor(http: HttpClient) {
    super(http, 'stock-movements');
  }

  getMovementsByProduct(productId: number): Observable<StockMovement[]> {
    return this.http.get<StockMovement[]>(`${this.apiUrl}/product/${productId}`, { headers: this.getHeaders() });
  }

  getMovementsByWarehouse(warehouseId: number): Observable<StockMovement[]> {
    return this.http.get<StockMovement[]>(`${this.apiUrl}/warehouse/${warehouseId}`, { headers: this.getHeaders() });
  }

  getMovementsByDateRange(startDate: Date, endDate: Date): Observable<StockMovement[]> {
    return this.http.get<StockMovement[]>(`${this.apiUrl}/date?from=${startDate}&to=${endDate}`, { headers: this.getHeaders() });
  }

  getMovementsByType(movementType: string): Observable<StockMovement[]> {
    return this.http.get<StockMovement[]>(`${this.apiUrl}/type/${movementType}`, { headers: this.getHeaders() });
  }
}