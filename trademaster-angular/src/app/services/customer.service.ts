import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from './base.service';
import { Customer } from '../models';

@Injectable({
  providedIn: 'root'
})
export class CustomerService extends BaseService {
  constructor(http: HttpClient) {
    super(http, 'customers');
  }

  getCustomersByCompany(companyId: number): Observable<Customer[]> {
    return this.http.get<Customer[]>(`${this.apiUrl}/company/${companyId}`, { headers: this.getHeaders() });
  }

  searchCustomers(keyword: string): Observable<Customer[]> {
    return this.http.get<Customer[]>(`${this.apiUrl}/search?q=${keyword}`, { headers: this.getHeaders() });
  }

  getCustomerBalance(customerId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${customerId}/balance`, { headers: this.getHeaders() });
  }

  getCustomerTransactions(customerId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/${customerId}/transactions`, { headers: this.getHeaders() });
  }

  getDueCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(`${this.apiUrl}/due`, { headers: this.getHeaders() });
  }
}