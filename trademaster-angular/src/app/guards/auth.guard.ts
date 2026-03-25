import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(private router: Router) {}

  canActivate(): boolean {
    // For testing, always return true
    // This bypasses authentication for now
    return true;
    
    // Uncomment this for real authentication
    /*
    const token = localStorage.getItem('token');
    if (token) {
      return true;
    }
    this.router.navigate(['/auth/login']);
    return false;
    */
  }
}