// src/app/guards/auth.guard.ts

import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(private router: Router) {}

  canActivate(): boolean {
    // localStorage থেকে token চেক করুন
    const token = localStorage.getItem('token');
    
    if (token) {
      // token থাকলে true return করুন - পেজে ঢুকতে পারবে
      return true;
    }
    
    // token না থাকলে login পেজে পাঠিয়ে দিন
    this.router.navigate(['/auth/login']);
    return false;
  }
}