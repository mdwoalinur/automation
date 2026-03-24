// src/app/guards/role.guard.ts

import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    // localStorage থেকে ইউজারের রোল নিন
    const userRole = localStorage.getItem('userRole');
    
    // route এ কোন রোল অনুমোদিত আছে?
    const allowedRoles = route.data['roles'] as Array<string>;
    
    // যদি ইউজারের রোল অনুমোদিত রোলের মধ্যে থাকে
    if (allowedRoles && allowedRoles.includes(userRole || '')) {
      return true; // ঢুকতে পারবে
    }
    
    // নইলে dashboard এ পাঠিয়ে দিন
    this.router.navigate(['/dashboard']);
    return false;
  }
}