import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from './base.service';
import { Expense, ExpenseCategory } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService extends BaseService {
  constructor(http: HttpClient) {
    super(http, 'expenses');
  }

  getExpensesByCompany(companyId: number): Observable<Expense[]> {
    return this.http.get<Expense[]>(`${this.apiUrl}/company/${companyId}`, { headers: this.getHeaders() });
  }

  getExpensesByCategory(categoryId: number): Observable<Expense[]> {
    return this.http.get<Expense[]>(`${this.apiUrl}/category/${categoryId}`, { headers: this.getHeaders() });
  }

  getExpenseCategories(): Observable<ExpenseCategory[]> {
    return this.http.get<ExpenseCategory[]>(`${this.apiUrl}/categories`, { headers: this.getHeaders() });
  }

  createExpenseCategory(category: ExpenseCategory): Observable<any> {
    return this.http.post(`${this.apiUrl}/categories`, category, { headers: this.getHeaders() });
  }

  getMonthlyExpenseSummary(year: number, month: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/summary?year=${year}&month=${month}`, { headers: this.getHeaders() });
  }
}