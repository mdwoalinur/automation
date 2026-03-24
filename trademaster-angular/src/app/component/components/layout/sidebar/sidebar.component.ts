import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  
  // Menu structure with submenus
  menuItems = [
    {
      name: 'Dashboard',
      icon: 'bi bi-speedometer2',
      route: '/dashboard',
      badge: null
    },
    {
      name: 'Products',
      icon: 'bi bi-box',
      route: null,
      badge: null,
      children: [
        { name: 'Product List', route: '/products', icon: 'bi bi-list-ul' },
        { name: 'Add Product', route: '/products/new', icon: 'bi bi-plus-circle' },
        { name: 'Categories', route: '/categories', icon: 'bi bi-tags' },
        { name: 'Batches', route: '/batches', icon: 'bi bi-layers' },
        { name: 'Variations', route: '/variations', icon: 'bi bi-grid' }
      ]
    },
    {
      name: 'Inventory',
      icon: 'bi bi-archive',
      route: null,
      badge: null,
      children: [
        { name: 'Stock Overview', route: '/inventory', icon: 'bi bi-eye' },
        { name: 'Stock Movements', route: '/inventory/movements', icon: 'bi bi-arrow-left-right' },
        { name: 'Stock Adjustments', route: '/inventory/adjustments', icon: 'bi bi-sliders2' },
        { name: 'Low Stock Alerts', route: '/inventory/low-stock', icon: 'bi bi-exclamation-triangle' },
        { name: 'Stock Forecast', route: '/inventory/forecast', icon: 'bi bi-graph-up' }
      ]
    },
    {
      name: 'Sales',
      icon: 'bi bi-cart',
      route: null,
      badge: null,
      children: [
        { name: 'Point of Sale (POS)', route: '/sales/pos', icon: 'bi bi-cash-stack' },
        { name: 'Sales List', route: '/sales/list', icon: 'bi bi-receipt' },
        { name: 'Sales Returns', route: '/sales/returns', icon: 'bi bi-arrow-return-left' }
      ]
    },
    {
      name: 'Purchases',
      icon: 'bi bi-truck',
      route: null,
      badge: null,
      children: [
        { name: 'Purchase List', route: '/purchases', icon: 'bi bi-list-ul' },
        { name: 'Add Purchase', route: '/purchases/new', icon: 'bi bi-plus-circle' },
        { name: 'Purchase Returns', route: '/purchases/returns', icon: 'bi bi-arrow-return-left' }
      ]
    },
    {
      name: 'Customers',
      icon: 'bi bi-people',
      route: null,
      badge: null,
      children: [
        { name: 'Customer List', route: '/customers', icon: 'bi bi-list-ul' },
        { name: 'Add Customer', route: '/customers/new', icon: 'bi bi-person-plus' },
        { name: 'Due Management', route: '/customers/due', icon: 'bi bi-credit-card' }
      ]
    },
    {
      name: 'Suppliers',
      icon: 'bi bi-building',
      route: null,
      badge: null,
      children: [
        { name: 'Supplier List', route: '/suppliers', icon: 'bi bi-list-ul' },
        { name: 'Add Supplier', route: '/suppliers/new', icon: 'bi bi-plus-circle' }
      ]
    },
    {
      name: 'Warehouses',
      icon: 'bi bi-building-warehouse',
      route: null,
      badge: null,
      children: [
        { name: 'Warehouse List', route: '/warehouses', icon: 'bi bi-list-ul' },
        { name: 'Add Warehouse', route: '/warehouses/new', icon: 'bi bi-plus-circle' }
      ]
    },
    {
      name: 'Reports',
      icon: 'bi bi-file-text',
      route: null,
      badge: null,
      children: [
        { name: 'Sales Report', route: '/reports/sales', icon: 'bi bi-graph-up' },
        { name: 'Inventory Report', route: '/reports/inventory', icon: 'bi bi-pie-chart' },
        { name: 'Purchase Report', route: '/reports/purchases', icon: 'bi bi-truck' },
        { name: 'Profit & Loss', route: '/reports/profit-loss', icon: 'bi bi-currency-dollar' }
      ]
    },
    {
      name: 'Settings',
      icon: 'bi bi-gear',
      route: null,
      badge: null,
      children: [
        { name: 'Company Settings', route: '/settings/company', icon: 'bi bi-building' },
        { name: 'User Management', route: '/users', icon: 'bi bi-person-badge' },
        { name: 'System Settings', route: '/settings/system', icon: 'bi bi-sliders2' },
        { name: 'Audit Logs', route: '/audit/logs', icon: 'bi bi-journal-text' }
      ]
    }
  ];

  activeSubmenu: string | null = null;

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Auto expand submenu based on current route
    this.checkActiveRoute();
  }

  toggleSubmenu(menuName: string): void {
    if (this.activeSubmenu === menuName) {
      this.activeSubmenu = null;
    } else {
      this.activeSubmenu = menuName;
    }
  }

  isSubmenuActive(menuName: string): boolean {
    return this.activeSubmenu === menuName;
  }

  isRouteActive(route: string): boolean {
    return this.router.url === route;
  }

  private checkActiveRoute(): void {
    const currentUrl = this.router.url;
    for (const menu of this.menuItems) {
      if (menu.children) {
        for (const child of menu.children) {
          if (currentUrl === child.route) {
            this.activeSubmenu = menu.name;
            return;
          }
        }
      } else if (currentUrl === menu.route) {
        return;
      }
    }
  }
}