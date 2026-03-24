import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from './base.service';
import { StockAdjustment } from '../models';

@Injectable({
  providedIn: 'root'
})
export class StockAdjustmentService extends BaseService {
  constructor(http: HttpClient) {
    super(http, 'stock-adjustments');
  }

  getPendingAdjustments(): Observable<StockAdjustment[]> {
    return this.http.get<StockAdjustment[]>(`${this.apiUrl}/pending`, { headers: this.getHeaders() });
  }

  approveAdjustment(adjustmentId: number, approvedBy: number): Observable<any> {
    return this.http.put(`${this.apiUrl}/${adjustmentId}/approve`, { approvedBy }, { headers: this.getHeaders() });
  }

  rejectAdjustment(adjustmentId: number, reason: string): Observable<any> {
    return this.http.put(`${this.apiUrl}/${adjustmentId}/reject`, { reason }, { headers: this.getHeaders() });
  }

  getAdjustmentsByDateRange(startDate: Date, endDate: Date): Observable<StockAdjustment[]> {
    return this.http.get<StockAdjustment[]>(`${this.apiUrl}/date?from=${startDate}&to=${endDate}`, { headers: this.getHeaders() });
  }
}