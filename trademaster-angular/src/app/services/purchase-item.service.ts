import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from './base.service';
import { PurchaseItem } from '../models';

@Injectable({
  providedIn: 'root'
})
export class PurchaseItemService extends BaseService {
  constructor(http: HttpClient) {
    super(http, 'purchase-items');
  }

  getItemsByPurchase(purchaseId: number): Observable<PurchaseItem[]> {
    return this.http.get<PurchaseItem[]>(`${this.apiUrl}/purchase/${purchaseId}`, { headers: this.getHeaders() });
  }

  getItemsByProduct(productId: number): Observable<PurchaseItem[]> {
    return this.http.get<PurchaseItem[]>(`${this.apiUrl}/product/${productId}`, { headers: this.getHeaders() });
  }

  updateReceivedQuantity(itemId: number, receivedQuantity: number): Observable<any> {
    return this.http.put(`${this.apiUrl}/${itemId}/receive`, { receivedQuantity }, { headers: this.getHeaders() });
  }
}