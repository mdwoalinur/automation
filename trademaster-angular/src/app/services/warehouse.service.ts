import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from './base.service';
import { Warehouse } from '../models';

@Injectable({
  providedIn: 'root'
})
export class WarehouseService extends BaseService {
  constructor(http: HttpClient) {
    super(http, 'warehouses');
  }

  getWarehousesByCompany(companyId: number): Observable<Warehouse[]> {
    return this.http.get<Warehouse[]>(`${this.apiUrl}/company/${companyId}`, { headers: this.getHeaders() });
  }

  getActiveWarehouses(): Observable<Warehouse[]> {
    return this.http.get<Warehouse[]>(`${this.apiUrl}/active`, { headers: this.getHeaders() });
  }

  getWarehouseStock(warehouseId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${warehouseId}/stock`, { headers: this.getHeaders() });
  }
}