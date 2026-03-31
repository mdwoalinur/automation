import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // User info
  currentUser = 'Md Woalinur';
  userRole = 'Administrator';

  // Page title (updates on route change)
  pageTitle = 'Dashboard';

  // Notifications
  notifications: { id: number; message: string; read: boolean }[] = [
    { id: 1, message: 'Low stock alert: Samsung TV', read: false },
    { id: 2, message: 'New order #INV-001 received', read: false },
    { id: 3, message: 'Purchase order #PO-001 delivered', read: true }
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Update page title when route changes
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.updatePageTitle();
    });
  }

  updatePageTitle(): void {
    const url = this.router.url;
    const titleMap: { [key: string]: string } = {
      '/dashboard': 'Dashboard',
      '/products': 'Products',
      '/categories': 'Categories',
      '/warehouses': 'Warehouses',
      '/sales/pos': 'Point of Sale',
      '/sales': 'Sales List',
      '/purchases': 'Purchases',
      '/customers': 'Customers',
      '/suppliers': 'Suppliers',
      '/inventory': 'Stock Overview',
      '/inventory/movements': 'Stock Movements',
      '/inventory/adjustments': 'Stock Adjustments',
      '/inventory/wastage': 'Wastage Management',
      '/reports/sales': 'Sales Report',
      '/reports/inventory': 'Inventory Report',
      '/reports/financial': 'Financial Report',
      '/users': 'User Management',
      '/settings': 'Settings',
      '/audit-logs': 'Audit Logs'
    };
    this.pageTitle = titleMap[url] || 'TradeMaster';
  }

  toggleSidebar(): void {
    const sidebar = document.querySelector('.sidebar');
    if (sidebar) {
      sidebar.classList.toggle('collapsed');
    }
    const mainContent = document.querySelector('.main-content');
    if (mainContent) {
      mainContent.classList.toggle('sidebar-collapsed');
    }
  }

  markAllAsRead(): void {
    this.notifications.forEach(n => n.read = true);
  }

  logout(): void {
    // Clear any stored tokens
    localStorage.removeItem('token');
    localStorage.removeItem('userRole');
    // Redirect to login
    this.router.navigate(['/auth/login']);
  }

  // Optional: unread count getter
  get unreadCount(): number {
    return this.notifications.filter(n => !n.read).length;
  }
}