import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  template: `
    <div class="register-container">
      <div class="register-box">
        <h2>Register</h2>
        <p>Registration page - Coming Soon</p>
        <a routerLink="/auth/login">Back to Login</a>
      </div>
    </div>
  `,
  styles: [`
    .register-container {
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    }
    .register-box {
      background: white;
      padding: 40px;
      border-radius: 20px;
      text-align: center;
    }
  `]
})
export class RegisterComponent { }