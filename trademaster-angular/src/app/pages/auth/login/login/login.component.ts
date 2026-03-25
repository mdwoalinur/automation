import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  template: `
    <div class="login-container">
      <div class="login-box">
        <h2>Login to TradeMaster</h2>
        <button class="btn btn-primary" (click)="login()">Login (Demo)</button>
      </div>
    </div>
  `,
  styles: [`
    .login-container {
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    }
    .login-box {
      background: white;
      padding: 40px;
      border-radius: 20px;
      text-align: center;
      min-width: 300px;
    }
  `]
})
export class LoginComponent {
  constructor(private router: Router) {}

  login(): void {
    // Set dummy token
    localStorage.setItem('token', 'dummy-token');
    localStorage.setItem('userRole', 'ADMIN');
    this.router.navigate(['/dashboard']);
  }
}