import { Component } from '@angular/core';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent {
  isSidebarCollapsed = false;

  toggleSidebar(): void {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
    // Optional: Save to localStorage
    localStorage.setItem('sidebarCollapsed', String(this.isSidebarCollapsed));
  }

  ngOnInit(): void {
    // Load saved sidebar state
    const savedState = localStorage.getItem('sidebarCollapsed');
    if (savedState) {
      this.isSidebarCollapsed = savedState === 'true';
    }
  }
}