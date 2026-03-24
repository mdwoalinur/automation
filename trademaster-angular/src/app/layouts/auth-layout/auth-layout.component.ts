// src/app/layouts/auth-layout/auth-layout.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-auth-layout',
  template: `
    <div class="auth-container">
      <!-- কোন sidebar/header/footer থাকবে না -->
      <!-- শুধু child route এর content (login/register) দেখাবে -->
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [`
    .auth-container {
      min-height: 100vh;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      display: flex;
      align-items: center;
      justify-content: center;
    }
  `]
})
export class AuthLayoutComponent {}