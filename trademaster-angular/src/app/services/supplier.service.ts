import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from './base.service';
import { Supplier } from '../models';

@Injectable({
  providedIn: 'root'
})
export class SupplierService extends BaseService {
  constructor(http: HttpClient) {
    super(http, 'suppliers');
  }

  getSuppliersByCompany(companyId: number): Observable<Supplier[]> {
    return this.http.get<Supplier[]>(`${this.apiUrl}/company/${companyId}`, { headers: this.getHeaders() });
  }

  searchSuppliers(keyword: string): Observable<Supplier[]> {
    return this.http.get<Supplier[]>(`${this.apiUrl}/search?q=${keyword}`, { headers: this.getHeaders() });
  }

  getSupplierPayments(supplierId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${supplierId}/payments`, { headers: this.getHeaders() });
  }
}