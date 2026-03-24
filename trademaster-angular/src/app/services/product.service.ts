import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from './base.service';
import { Product } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ProductService extends BaseService {
  getProducts() {
      throw new Error('Method not implemented.');
  }
 loadProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl, { headers: this.getHeaders() });
  }
 deleteProduct(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`, { headers: this.getHeaders() });
  }
  constructor(http: HttpClient) {
    super(http, 'products');
  }

  getProductsByCompany(companyId: number): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}/company/${companyId}`, { headers: this.getHeaders() });
  }

  getProductsByCategory(categoryId: number): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}/category/${categoryId}`, { headers: this.getHeaders() });
  }

  getLowStockProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}/low-stock`, { headers: this.getHeaders() });
  }

  getOutOfStockProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}/out-of-stock`, { headers: this.getHeaders() });
  }

  searchProducts(keyword: string): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}/search?q=${keyword}`, { headers: this.getHeaders() });
  }

  getProductByCode(code: string): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/code/${code}`, { headers: this.getHeaders() });
  }

  getProductBySku(sku: string): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/sku/${sku}`, { headers: this.getHeaders() });
  }

  getProductBarcode(productId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${productId}/barcode`, { headers: this.getHeaders(), responseType: 'blob' });
  }

  bulkImportProducts(file: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post(`${this.apiUrl}/bulk-import`, formData);
  }

  bulkExportProducts(): Observable<Blob> {
    return this.http.get(`${this.apiUrl}/bulk-export`, { headers: this.getHeaders(), responseType: 'blob' });
  }
}