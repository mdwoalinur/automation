import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class DashboardService extends BaseService {
  constructor(http: HttpClient) {
    super(http, 'dashboard');
  }

  getDashboardStats(companyId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/stats/${companyId}`, { headers: this.getHeaders() });
  }

  getRecentActivities(companyId: number, limit: number = 10): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/activities/${companyId}?limit=${limit}`, { headers: this.getHeaders() });
  }

  getLowStockSummary(companyId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/low-stock/${companyId}`, { headers: this.getHeaders() });
  }

  getTopProducts(companyId: number, limit: number = 5): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/top-products/${companyId}?limit=${limit}`, { headers: this.getHeaders() });
  }
}