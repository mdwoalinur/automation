import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from './base.service';
import { Product } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ProductService extends BaseService {
  
  constructor(http: HttpClient) {
    super(http, 'products');
  }

  /**
   * Get all products - Main method for POS and product list
   * Returns Observable<IProduct[]>
   */
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl, { headers: this.getHeaders() });
  }

  /**
   * Load products (alias for getProducts)
   */
  loadProducts(): Observable<Product[]> {
    return this.getProducts();
  }

  /**
   * Get single product by ID
   */
  getProduct(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/${id}`, { headers: this.getHeaders() });
  }

  /**
   * Create new product
   */
  createProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.apiUrl, product, { headers: this.getHeaders() });
  }

  /**
   * Update existing product
   */
  updateProduct(id: number, product: Product): Observable<Product> {
    return this.http.put<Product>(`${this.apiUrl}/${id}`, product, { headers: this.getHeaders() });
  }

  /**
   * Delete product by ID
   */
  deleteProduct(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`, { headers: this.getHeaders() });
  }

  /**
   * Get products by company ID
   */
  getProductsByCompany(companyId: number): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}/company/${companyId}`, { headers: this.getHeaders() });
  }

  /**
   * Get products by category ID
   */
  getProductsByCategory(categoryId: number): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}/category/${categoryId}`, { headers: this.getHeaders() });
  }

  /**
   * Get low stock products (below reorder level)
   */
  getLowStockProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}/low-stock`, { headers: this.getHeaders() });
  }

  /**
   * Get out of stock products (quantity = 0)
   */
  getOutOfStockProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}/out-of-stock`, { headers: this.getHeaders() });
  }

  /**
   * Search products by keyword
   */
  searchProducts(keyword: string): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}/search?q=${keyword}`, { headers: this.getHeaders() });
  }

  /**
   * Get product by product code
   */
  getProductByCode(code: string): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/code/${code}`, { headers: this.getHeaders() });
  }

  /**
   * Get product by SKU (for barcode scanning)
   */
  getProductBySku(sku: string): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/sku/${sku}`, { headers: this.getHeaders() });
  }

  /**
   * Get product barcode as image
   */
  getProductBarcode(productId: number): Observable<Blob> {
    return this.http.get(`${this.apiUrl}/${productId}/barcode`, { 
      headers: this.getHeaders(), 
      responseType: 'blob' 
    });
  }

  /**
   * Bulk import products from Excel/CSV file
   */
  bulkImportProducts(file: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post(`${this.apiUrl}/bulk-import`, formData);
  }

  /**
   * Bulk export products to Excel
   */
  bulkExportProducts(): Observable<Blob> {
    return this.http.get(`${this.apiUrl}/bulk-export`, { 
      headers: this.getHeaders(), 
      responseType: 'blob' 
    });
  }

  /**
   * Update product stock quantity
   */
  updateStock(productId: number, warehouseId: number, quantity: number): Observable<any> {
    return this.http.put(`${this.apiUrl}/${productId}/stock`, { warehouseId, quantity }, { headers: this.getHeaders() });
  }

  /**
   * Update product status (ACTIVE/INACTIVE)
   */
  updateProductStatus(id: number, status: 'ACTIVE' | 'INACTIVE'): Observable<Product> {
    return this.http.patch<Product>(`${this.apiUrl}/${id}/status`, { status }, { headers: this.getHeaders() });
  }
}