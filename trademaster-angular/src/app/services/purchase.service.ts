import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from './base.service';
import { Purchase, PurchaseItem } from '../models';

@Injectable({
  providedIn: 'root'
})
export class PurchaseService extends BaseService {
  
  constructor(http: HttpClient) {
    super(http, 'purchases');
  }

  /**
   * ✅ NEW: Get all purchases (for purchase list)
   */
  getPurchases(): Observable<Purchase[]> {
    return this.http.get<Purchase[]>(this.apiUrl, { headers: this.getHeaders() });
  }

  /**
   * ✅ NEW: Get single purchase by ID
   */
  getPurchase(id: number): Observable<Purchase> {
    return this.http.get<Purchase>(`${this.apiUrl}/${id}`, { headers: this.getHeaders() });
  }

  /**
   * Get purchases by company ID
   */
  getPurchasesByCompany(companyId: number): Observable<Purchase[]> {
    return this.http.get<Purchase[]>(`${this.apiUrl}/company/${companyId}`, { headers: this.getHeaders() });
  }

  /**
   * Get purchases by supplier ID
   */
  getPurchasesBySupplier(supplierId: number): Observable<Purchase[]> {
    return this.http.get<Purchase[]>(`${this.apiUrl}/supplier/${supplierId}`, { headers: this.getHeaders() });
  }

  /**
   * Get pending purchases (not received yet)
   */
  getPendingPurchases(): Observable<Purchase[]> {
    return this.http.get<Purchase[]>(`${this.apiUrl}/pending`, { headers: this.getHeaders() });
  }

  /**
   * Get purchases by date range
   */
  getPurchasesByDateRange(startDate: Date, endDate: Date): Observable<Purchase[]> {
    return this.http.get<Purchase[]>(`${this.apiUrl}/date?from=${startDate}&to=${endDate}`, { headers: this.getHeaders() });
  }

  /**
   * ✅ NEW: Get purchase items for a specific purchase
   */
  getPurchaseItems(purchaseId: number): Observable<PurchaseItem[]> {
    return this.http.get<PurchaseItem[]>(`${this.apiUrl}/${purchaseId}/items`, { headers: this.getHeaders() });
  }

  /**
   * Create new purchase order (updated to accept object format)
   */
  createPurchase(purchaseData: { purchase: Partial<Purchase>; items: PurchaseItem[] }): Observable<Purchase> {
    return this.http.post<Purchase>(this.apiUrl, purchaseData, { headers: this.getHeaders() });
  }

  /**
   * Alternative: Create purchase with separate parameters (backward compatibility)
   */
  createPurchaseWithItems(purchase: Purchase, items: PurchaseItem[]): Observable<any> {
    return this.http.post(`${this.apiUrl}/create`, { purchase, items }, { headers: this.getHeaders() });
  }

  /**
   * Update purchase order
   */
  updatePurchase(id: number, purchase: Partial<Purchase>): Observable<Purchase> {
    return this.http.put<Purchase>(`${this.apiUrl}/${id}`, purchase, { headers: this.getHeaders() });
  }

  /**
   * Receive purchase - updates stock
   */
  receivePurchase(purchaseId: number, receivedItems: any[]): Observable<any> {
    return this.http.put(`${this.apiUrl}/${purchaseId}/receive`, receivedItems, { headers: this.getHeaders() });
  }

  /**
   * Cancel purchase order
   */
  cancelPurchase(purchaseId: number, reason: string): Observable<any> {
    return this.http.put(`${this.apiUrl}/${purchaseId}/cancel`, { reason }, { headers: this.getHeaders() });
  }

  /**
   * Delete purchase order (only if not received)
   */
  deletePurchase(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`, { headers: this.getHeaders() });
  }

  /**
   * Get purchase summary
   */
  getPurchaseSummary(startDate: Date, endDate: Date): Observable<any> {
    return this.http.get(`${this.apiUrl}/summary?from=${startDate}&to=${endDate}`, { headers: this.getHeaders() });
  }

  /**
   * Print purchase order
   */
  printPurchaseOrder(id: number): Observable<Blob> {
    return this.http.get(`${this.apiUrl}/${id}/print`, { 
      headers: this.getHeaders(), 
      responseType: 'blob' 
    });
  }
}