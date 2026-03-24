import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from './base.service';
import { UserSession } from '../models';

@Injectable({
  providedIn: 'root'
})
export class UserSessionService extends BaseService {
  constructor(http: HttpClient) {
    super(http, 'user-sessions');
  }

  getActiveSessions(userId: number): Observable<UserSession[]> {
    return this.http.get<UserSession[]>(`${this.apiUrl}/user/${userId}/active`, { headers: this.getHeaders() });
  }

  terminateSession(sessionId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${sessionId}`, { headers: this.getHeaders() });
  }

  terminateAllUserSessions(userId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/user/${userId}/all`, { headers: this.getHeaders() });
  }

  getCurrentSession(): Observable<UserSession> {
    return this.http.get<UserSession>(`${this.apiUrl}/current`, { headers: this.getHeaders() });
  }
}