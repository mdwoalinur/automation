import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from './base.service';
import { DueCollection } from '../models';

@Injectable({
  providedIn: 'root'
})
export class DueCollectionService extends BaseService {
  constructor(http: HttpClient) {
    super(http, 'due-collections');
  }

  getCollectionsBySale(saleId: number): Observable<DueCollection[]> {
    return this.http.get<DueCollection[]>(`${this.apiUrl}/sale/${saleId}`, { headers: this.getHeaders() });
  }

  getCollectionsByCustomer(customerId: number): Observable<DueCollection[]> {
    return this.http.get<DueCollection[]>(`${this.apiUrl}/customer/${customerId}`, { headers: this.getHeaders() });
  }

  recordCollection(collection: DueCollection): Observable<any> {
    return this.http.post(this.apiUrl, collection, { headers: this.getHeaders() });
  }
}