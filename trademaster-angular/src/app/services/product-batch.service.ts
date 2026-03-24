import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from './base.service';
import { ProductBatch } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ProductBatchService extends BaseService {
  constructor(http: HttpClient) {
    super(http, 'batches');
  }

  getBatchesByProduct(productId: number): Observable<ProductBatch[]> {
    return this.http.get<ProductBatch[]>(`${this.apiUrl}/product/${productId}`, { headers: this.getHeaders() });
  }

  getExpiringBatches(days: number): Observable<ProductBatch[]> {
    return this.http.get<ProductBatch[]>(`${this.apiUrl}/expiring?days=${days}`, { headers: this.getHeaders() });
  }

  getExpiredBatches(): Observable<ProductBatch[]> {
    return this.http.get<ProductBatch[]>(`${this.apiUrl}/expired`, { headers: this.getHeaders() });
  }

  createBatch(batch: ProductBatch): Observable<any> {
    return this.http.post(this.apiUrl, batch, { headers: this.getHeaders() });
  }

  updateBatchStock(batchId: number, quantity: number): Observable<any> {
    return this.http.put(`${this.apiUrl}/${batchId}/stock`, { quantity }, { headers: this.getHeaders() });
  }
}