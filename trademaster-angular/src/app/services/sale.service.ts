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

  /**
   * Get all sales
   */
  getSales(): Observable<Sale[]> {
    return this.http.get<Sale[]>(this.apiUrl, { headers: this.getHeaders() });
  }

  /**
   * Get sale by ID
   */
  getSale(id: number): Observable<Sale> {
    return this.http.get<Sale>(`${this.apiUrl}/${id}`, { headers: this.getHeaders() });
  }

  /**
   * Get sale by invoice number
   */
  getSaleByInvoiceNo(invoiceNo: string): Observable<Sale> {
    return this.http.get<Sale>(`${this.apiUrl}/invoice/${invoiceNo}`, { headers: this.getHeaders() });
  }

  /**
   * Get sales by date range
   */
  getSalesByDateRange(startDate: Date, endDate: Date): Observable<Sale[]> {
    return this.http.get<Sale[]>(`${this.apiUrl}/date?from=${startDate}&to=${endDate}`, { headers: this.getHeaders() });
  }

  /**
   * Get today's sales
   */
  getTodaySales(): Observable<Sale[]> {
    return this.http.get<Sale[]>(`${this.apiUrl}/today`, { headers: this.getHeaders() });
  }

  /**
   * Get sales by customer
   */
  getSalesByCustomer(customerId: number): Observable<Sale[]> {
    return this.http.get<Sale[]>(`${this.apiUrl}/customer/${customerId}`, { headers: this.getHeaders() });
  }

  /**
   * Create new sale - ACCEPTS SALE DATA WITH ITEMS
   * @param saleData - Object containing sale and items
   */
  createSale(saleData: { sale: Partial<Sale>, items: SaleItem[] }): Observable<Sale> {
    return this.http.post<Sale>(this.apiUrl, saleData, { headers: this.getHeaders() });
  }

  /**
   * Alternative: Create sale with separate parameters
   * @param sale - Sale data
   * @param items - Sale items array
   */
  createSaleWithItems(sale: Partial<Sale>, items: SaleItem[]): Observable<Sale> {
    return this.http.post<Sale>(this.apiUrl, { sale, items }, { headers: this.getHeaders() });
  }

  /**
   * Update sale
   */
  updateSale(id: number, sale: Partial<Sale>): Observable<Sale> {
    return this.http.put<Sale>(`${this.apiUrl}/${id}`, sale, { headers: this.getHeaders() });
  }

  /**
   * Cancel sale
   */
  cancelSale(id: number, reason: string): Observable<Sale> {
    return this.http.put<Sale>(`${this.apiUrl}/${id}/cancel`, { reason }, { headers: this.getHeaders() });
  }

  /**
   * Get sale items
   */
  getSaleItems(saleId: number): Observable<SaleItem[]> {
    return this.http.get<SaleItem[]>(`${this.apiUrl}/${saleId}/items`, { headers: this.getHeaders() });
  }

  /**
   * Get sales summary
   */
  getSalesSummary(startDate: Date, endDate: Date): Observable<any> {
    return this.http.get(`${this.apiUrl}/summary?from=${startDate}&to=${endDate}`, { headers: this.getHeaders() });
  }

  /**
   * Get sales statistics
   */
  getSalesStats(): Observable<any> {
    return this.http.get(`${this.apiUrl}/stats`, { headers: this.getHeaders() });
  }

  /**
   * Print invoice
   */
  printInvoice(saleId: number): Observable<Blob> {
    return this.http.get(`${this.apiUrl}/${saleId}/print`, { 
      headers: this.getHeaders(), 
      responseType: 'blob' 
    });
  }
}