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

  getPurchasesByCompany(companyId: number): Observable<Purchase[]> {
    return this.http.get<Purchase[]>(`${this.apiUrl}/company/${companyId}`, { headers: this.getHeaders() });
  }

  getPurchasesBySupplier(supplierId: number): Observable<Purchase[]> {
    return this.http.get<Purchase[]>(`${this.apiUrl}/supplier/${supplierId}`, { headers: this.getHeaders() });
  }

  getPendingPurchases(): Observable<Purchase[]> {
    return this.http.get<Purchase[]>(`${this.apiUrl}/pending`, { headers: this.getHeaders() });
  }

  createPurchase(purchase: Purchase, items: PurchaseItem[]): Observable<any> {
    return this.http.post(`${this.apiUrl}/create`, { purchase, items }, { headers: this.getHeaders() });
  }

  receivePurchase(purchaseId: number, receivedItems: any[]): Observable<any> {
    return this.http.put(`${this.apiUrl}/${purchaseId}/receive`, receivedItems, { headers: this.getHeaders() });
  }

  cancelPurchase(purchaseId: number, reason: string): Observable<any> {
    return this.http.put(`${this.apiUrl}/${purchaseId}/cancel`, { reason }, { headers: this.getHeaders() });
  }

  getPurchaseItems(purchaseId: number): Observable<PurchaseItem[]> {
    return this.http.get< PurchaseItem[]>(`${this.apiUrl}/${purchaseId}/items`, { headers: this.getHeaders() });
  }
}