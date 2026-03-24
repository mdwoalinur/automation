import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from './base.service';
import { Payment } from '../models';

@Injectable({
  providedIn: 'root'
})
export class PaymentService extends BaseService {
  constructor(http: HttpClient) {
    super(http, 'payments');
  }

  getPaymentsByReference(referenceType: string, referenceId: number): Observable<Payment[]> {
    return this.http.get<Payment[]>(`${this.apiUrl}/${referenceType}/${referenceId}`, { headers: this.getHeaders() });
  }

  getPaymentsByCompany(companyId: number): Observable<Payment[]> {
    return this.http.get<Payment[]>(`${this.apiUrl}/company/${companyId}`, { headers: this.getHeaders() });
  }

  recordPayment(payment: Payment): Observable<any> {
    return this.http.post(this.apiUrl, payment, { headers: this.getHeaders() });
  }

  refundPayment(paymentId: number, amount: number, reason: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/${paymentId}/refund`, { amount, reason }, { headers: this.getHeaders() });
  }
}