import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from './base.service';
import { LowStockAlert } from '../models';

@Injectable({
  providedIn: 'root'
})
export class LowStockAlertService extends BaseService {
  constructor(http: HttpClient) {
    super(http, 'low-stock-alerts');
  }

  getUnsentAlerts(): Observable<LowStockAlert[]> {
    return this.http.get<LowStockAlert[]>(`${this.apiUrl}/unsent`, { headers: this.getHeaders() });
  }

  getAlertsByProduct(productId: number): Observable<LowStockAlert[]> {
    return this.http.get<LowStockAlert[]>(`${this.apiUrl}/product/${productId}`, { headers: this.getHeaders() });
  }

  markAlertAsSent(alertId: number): Observable<any> {
    return this.http.put(`${this.apiUrl}/${alertId}/mark-sent`, {}, { headers: this.getHeaders() });
  }

  generateAlerts(): Observable<any> {
    return this.http.post(`${this.apiUrl}/generate`, {}, { headers: this.getHeaders() });
  }

  updateThreshold(productId: number, threshold: number): Observable<any> {
    return this.http.put(`${this.apiUrl}/threshold/${productId}`, { threshold }, { headers: this.getHeaders() });
  }
}