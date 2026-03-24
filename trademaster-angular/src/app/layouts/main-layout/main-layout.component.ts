// src/app/layouts/main-layout/main-layout.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-main-layout',
  template: `
    <div class="app-container">
      <!-- Sidebar সব পেজে কমন -->
      <app-sidebar></app-sidebar>
      
      <div class="main-content">
        <!-- Header সব পেজে কমন -->
        <app-header></app-header>
        
        <!-- এখানে child routes এর content বসবে -->
        <div class="content-wrapper">
          <router-outlet></router-outlet>
        </div>
        
        <!-- Footer সব পেজে কমন -->
        <app-footer></app-footer>
      </div>
    </div>
  `,
  styles: [`
    .app-container {
      display: flex;
      min-height: 100vh;
    }
    .main-content {
      flex: 1;
      margin-left: 260px;
      transition: all 0.3s;
    }
    .content-wrapper {
      padding: 20px;
      background: #f8f9fa;
      min-height: calc(100vh - 120px);
    }
    @media (max-width: 768px) {
      .main-content {
        margin-left: 0;
      }
    }
  `]
})
export class MainLayoutComponent {}