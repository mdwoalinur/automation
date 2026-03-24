import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from './base.service';
import { AuditLog } from '../models';

@Injectable({
  providedIn: 'root'
})
export class AuditLogService extends BaseService {
  constructor(http: HttpClient) {
    super(http, 'audit-logs');
  }

  getLogsByUser(userId: number): Observable<AuditLog[]> {
    return this.http.get<AuditLog[]>(`${this.apiUrl}/user/${userId}`, { headers: this.getHeaders() });
  }

  getLogsByEntity(entityType: string, entityId: number): Observable<AuditLog[]> {
    return this.http.get<AuditLog[]>(`${this.apiUrl}/entity/${entityType}/${entityId}`, { headers: this.getHeaders() });
  }

  getLogsByDateRange(startDate: Date, endDate: Date): Observable<AuditLog[]> {
    return this.http.get<AuditLog[]>(`${this.apiUrl}/date?from=${startDate}&to=${endDate}`, { headers: this.getHeaders() });
  }
}