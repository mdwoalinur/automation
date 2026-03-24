import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from './base.service';
import { ReportCache } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ReportCacheService extends BaseService {
  constructor(http: HttpClient) {
    super(http, 'report-cache');
  }

  getCachedReport(reportType: string, reportDate: Date): Observable<ReportCache> {
    return this.http.get<ReportCache>(`${this.apiUrl}/${reportType}/${reportDate}`, { headers: this.getHeaders() });
  }

  saveReportCache(cache: ReportCache): Observable<any> {
    return this.http.post(this.apiUrl, cache, { headers: this.getHeaders() });
  }

  invalidateCache(reportType: string, reportDate: Date): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${reportType}/${reportDate}`, { headers: this.getHeaders() });
  }

  clearOldCache(days: number = 30): Observable<any> {
    return this.http.delete(`${this.apiUrl}/clear?days=${days}`, { headers: this.getHeaders() });
  }
}