import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from './base.service';
import { Notification } from '../models';

@Injectable({
  providedIn: 'root'
})
export class NotificationService extends BaseService {
  constructor(http: HttpClient) {
    super(http, 'notifications');
  }

  getMyNotifications(): Observable<Notification[]> {
    return this.http.get<Notification[]>(`${this.apiUrl}/my`, { headers: this.getHeaders() });
  }

  getUnreadCount(): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/unread-count`, { headers: this.getHeaders() });
  }

  markAsRead(notificationId: number): Observable<any> {
    return this.http.put(`${this.apiUrl}/${notificationId}/read`, {}, { headers: this.getHeaders() });
  }

  markAllAsRead(): Observable<any> {
    return this.http.put(`${this.apiUrl}/read-all`, {}, { headers: this.getHeaders() });
  }

  deleteNotification(notificationId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${notificationId}`, { headers: this.getHeaders() });
  }
}