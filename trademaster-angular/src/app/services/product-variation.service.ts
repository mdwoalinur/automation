import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from './base.service';
import { ProductVariation } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ProductVariationService extends BaseService {
  constructor(http: HttpClient) {
    super(http, 'variations');
  }

  getVariationsByProduct(productId: number): Observable<ProductVariation[]> {
    return this.http.get<ProductVariation[]>(`${this.apiUrl}/product/${productId}`, { headers: this.getHeaders() });
  }

  getVariationBySku(sku: string): Observable<ProductVariation> {
    return this.http.get<ProductVariation>(`${this.apiUrl}/sku/${sku}`, { headers: this.getHeaders() });
  }
}