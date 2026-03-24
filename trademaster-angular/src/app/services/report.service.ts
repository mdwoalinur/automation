import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class ReportService extends BaseService {
  constructor(http: HttpClient) {
    super(http, 'reports');
  }

  // Stock Reports
  getStockReport(companyId: number, warehouseId?: number): Observable<Blob> {
    let url = `${this.apiUrl}/stock?companyId=${companyId}`;
    if (warehouseId) url += `&warehouseId=${warehouseId}`;
    return this.http.get(url, { headers: this.getHeaders(), responseType: 'blob' });
  }

  // Sales Reports
  getSalesReport(startDate: Date, endDate: Date, format: string = 'PDF'): Observable<Blob> {
    return this.http.get(`${this.apiUrl}/sales?from=${startDate}&to=${endDate}&format=${format}`, 
      { headers: this.getHeaders(), responseType: 'blob' });
  }

  getSalesSummary(startDate: Date, endDate: Date): Observable<any> {
    return this.http.get(`${this.apiUrl}/sales-summary?from=${startDate}&to=${endDate}`, { headers: this.getHeaders() });
  }

  // Purchase Reports
  getPurchaseReport(startDate: Date, endDate: Date): Observable<Blob> {
    return this.http.get(`${this.apiUrl}/purchases?from=${startDate}&to=${endDate}`, 
      { headers: this.getHeaders(), responseType: 'blob' });
  }

  // Financial Reports
  getProfitLossReport(startDate: Date, endDate: Date): Observable<any> {
    return this.http.get(`${this.apiUrl}/profit-loss?from=${startDate}&to=${endDate}`, { headers: this.getHeaders() });
  }

  // Customer Reports
  getCustomerStatement(customerId: number, startDate: Date, endDate: Date): Observable<Blob> {
    return this.http.get(`${this.apiUrl}/customer/${customerId}?from=${startDate}&to=${endDate}`, 
      { headers: this.getHeaders(), responseType: 'blob' });
  }

  // Supplier Reports
  getSupplierStatement(supplierId: number, startDate: Date, endDate: Date): Observable<Blob> {
    return this.http.get(`${this.apiUrl}/supplier/${supplierId}?from=${startDate}&to=${endDate}`, 
      { headers: this.getHeaders(), responseType: 'blob' });
  }

  // Dashboard Data
  getDashboardData(companyId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/dashboard/${companyId}`, { headers: this.getHeaders() });
  }

  getSalesChartData(companyId: number, days: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/chart/sales?companyId=${companyId}&days=${days}`, { headers: this.getHeaders() });
  }
}