import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from './base.service';
import { Sale, SaleItem } from '../models';

@Injectable({
  providedIn: 'root'
})
export class SaleService extends BaseService {
  constructor(http: HttpClient) {
    super(http, 'sales');
  }

  getSalesByCompany(companyId: number): Observable<Sale[]> {
    return this.http.get<Sale[]>(`${this.apiUrl}/company/${companyId}`, { headers: this.getHeaders() });
  }

  getSalesByDateRange(startDate: Date, endDate: Date): Observable<Sale[]> {
    return this.http.get<Sale[]>(`${this.apiUrl}/date?from=${startDate}&to=${endDate}`, { headers: this.getHeaders() });
  }

  getTodaySales(): Observable<Sale[]> {
    return this.http.get<Sale[]>(`${this.apiUrl}/today`, { headers: this.getHeaders() });
  }

  getSaleByInvoiceNo(invoiceNo: string): Observable<Sale> {
    return this.http.get<Sale>(`${this.apiUrl}/invoice/${invoiceNo}`, { headers: this.getHeaders() });
  }

  getSalesByCustomer(customerId: number): Observable<Sale[]> {
    return this.http.get<Sale[]>(`${this.apiUrl}/customer/${customerId}`, { headers: this.getHeaders() });
  }

  createSale(sale: Sale, items: SaleItem[]): Observable<any> {
    return this.http.post(`${this.apiUrl}/create`, { sale, items }, { headers: this.getHeaders() });
  }

  cancelSale(saleId: number, reason: string): Observable<any> {
    return this.http.put(`${this.apiUrl}/${saleId}/cancel`, { reason }, { headers: this.getHeaders() });
  }

  getSaleItems(saleId: number): Observable<SaleItem[]> {
    return this.http.get<SaleItem[]>(`${this.apiUrl}/${saleId}/items`, { headers: this.getHeaders() });
  }

  getSalesSummary(startDate: Date, endDate: Date): Observable<any> {
    return this.http.get(`${this.apiUrl}/summary?from=${startDate}&to=${endDate}`, { headers: this.getHeaders() });
  }

  getSalesStats(): Observable<any> {
    return this.http.get(`${this.apiUrl}/stats`, { headers: this.getHeaders() });
  }

  printInvoice(saleId: number): Observable<Blob> {
    return this.http.get(`${this.apiUrl}/${saleId}/print`, { headers: this.getHeaders(), responseType: 'blob' });
  }

  getSalesReport(month: number, year: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/report?month=${month}&year=${year}`, { headers: this.getHeaders() });
  }
}