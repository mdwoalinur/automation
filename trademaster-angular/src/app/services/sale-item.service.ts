import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from './base.service';
import { SaleItem } from '../models';

@Injectable({
  providedIn: 'root'
})
export class SaleItemService extends BaseService {
  constructor(http: HttpClient) {
    super(http, 'sale-items');
  }

  getItemsBySale(saleId: number): Observable<SaleItem[]> {
    return this.http.get<SaleItem[]>(`${this.apiUrl}/sale/${saleId}`, { headers: this.getHeaders() });
  }

  getItemsByProduct(productId: number): Observable<SaleItem[]> {
    return this.http.get<SaleItem[]>(`${this.apiUrl}/product/${productId}`, { headers: this.getHeaders() });
  }

  refundItem(itemId: number, quantity: number, reason: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/${itemId}/refund`, { quantity, reason }, { headers: this.getHeaders() });
  }
}