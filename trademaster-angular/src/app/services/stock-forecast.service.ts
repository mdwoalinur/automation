import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from './base.service';
import { StockForecast } from '../models';

@Injectable({
  providedIn: 'root'
})
export class StockForecastService extends BaseService {
  constructor(http: HttpClient) {
    super(http, 'stock-forecast');
  }

  getForecastByProduct(productId: number): Observable<StockForecast[]> {
    return this.http.get<StockForecast[]>(`${this.apiUrl}/product/${productId}`, { headers: this.getHeaders() });
  }

  generateForecast(productId: number, days: number = 30): Observable<StockForecast> {
    return this.http.post<StockForecast>(`${this.apiUrl}/generate`, { productId, days }, { headers: this.getHeaders() });
  }

  generateAllForecasts(): Observable<any> {
    return this.http.post(`${this.apiUrl}/generate-all`, {}, { headers: this.getHeaders() });
  }

  getRecommendedOrders(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/recommended-orders`, { headers: this.getHeaders() });
  }
}