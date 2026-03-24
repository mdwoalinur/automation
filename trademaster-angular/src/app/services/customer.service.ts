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

  /**
   * Get all customers
   */
  getCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.apiUrl, { headers: this.getHeaders() });
  }

  /**
   * Get customers by company ID
   */
  getCustomersByCompany(companyId: number): Observable<Customer[]> {
    return this.http.get<Customer[]>(`${this.apiUrl}/company/${companyId}`, { headers: this.getHeaders() });
  }

  /**
   * Get single customer by ID
   */
  getCustomer(id: number): Observable<Customer> {
    return this.http.get<Customer>(`${this.apiUrl}/${id}`, { headers: this.getHeaders() });
  }

  /**
   * Create new customer
   */
  createCustomer(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(this.apiUrl, customer, { headers: this.getHeaders() });
  }

  /**
   * Update customer
   */
  updateCustomer(id: number, customer: Customer): Observable<Customer> {
    return this.http.put<Customer>(`${this.apiUrl}/${id}`, customer, { headers: this.getHeaders() });
  }

  /**
   * Delete customer
   */
  deleteCustomer(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`, { headers: this.getHeaders() });
  }

  /**
   * Search customers
   */
  searchCustomers(keyword: string): Observable<Customer[]> {
    return this.http.get<Customer[]>(`${this.apiUrl}/search?q=${keyword}`, { headers: this.getHeaders() });
  }

  /**
   * Get customers with due balance
   */
  getDueCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(`${this.apiUrl}/due`, { headers: this.getHeaders() });
  }

  /**
   * Get customer balance
   */
  getCustomerBalance(customerId: number): Observable<{ balance: number }> {
    return this.http.get<{ balance: number }>(`${this.apiUrl}/${customerId}/balance`, { headers: this.getHeaders() });
  }

  /**
   * Get customer transactions
   */
  getCustomerTransactions(customerId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/${customerId}/transactions`, { headers: this.getHeaders() });
  }
}