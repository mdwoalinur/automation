import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems = [
    { path: '/dashboard', icon: 'bi-speedometer2', label: 'Dashboard' },
    { path: '/products', icon: 'bi-box', label: 'Products' },
    { path: '/inventory', icon: 'bi-archive', label: 'Inventory' },
    { path: '/sales', icon: 'bi-cart', label: 'POS' },
    { path: '/sales/list', icon: 'bi-receipt', label: 'Sales List' },
    { path: '/customers', icon: 'bi-people', label: 'Customers' },
    { path: '/suppliers', icon: 'bi-truck', label: 'Suppliers' },
    { path: '/reports', icon: 'bi-file-text', label: 'Reports' }
  ];
  
  isCollapsed = false;

  constructor() { }

  ngOnInit(): void { }

  toggleSidebar(): void {
    this.isCollapsed = !this.isCollapsed;
  }
}
