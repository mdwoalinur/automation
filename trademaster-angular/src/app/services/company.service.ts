import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from './base.service';
import { Company } from '../models';

@Injectable({
  providedIn: 'root'
})
export class CompanyService extends BaseService {
  constructor(http: HttpClient) {
    super(http, 'companies');
  }

  getCompanySettings(companyId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${companyId}/settings`, { headers: this.getHeaders() });
  }

  updateCompanySettings(companyId: number, settings: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${companyId}/settings`, settings, { headers: this.getHeaders() });
  }

  getCompanyStats(companyId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${companyId}/stats`, { headers: this.getHeaders() });
  }

  getActiveCompanies(): Observable<Company[]> {
    return this.http.get<Company[]>(`${this.apiUrl}/active`, { headers: this.getHeaders() });
  }
}