import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from './base.service';
import { User } from '../models';

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseService {
  constructor(http: HttpClient) {
    super(http, 'users');
  }

  getUsersByCompany(companyId: number): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}/company/${companyId}`, { headers: this.getHeaders() });
  }

  getUserByUsername(username: string): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/username/${username}`, { headers: this.getHeaders() });
  }

  changePassword(userId: number, oldPassword: string, newPassword: string): Observable<any> {
    return this.http.put(`${this.apiUrl}/${userId}/change-password`, { oldPassword, newPassword }, { headers: this.getHeaders() });
  }

  updateProfile(userId: number, data: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${userId}/profile`, data, { headers: this.getHeaders() });
  }

  getCurrentUser(): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/me`, { headers: this.getHeaders() });
  }
}