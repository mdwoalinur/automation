import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {
  currentDate = new Date();
  currentTime = '';
  private timer: any;

  // Stats data
  stats = {
    totalProducts: 1245,
    todaySales: 45280,
    lowStock: 23,
    totalCustomers: 567
  };

  // Top selling products
  topProducts = [
    { name: 'iPhone 15 Pro', sold: 245, revenue: 245000 },
    { name: 'Samsung TV 55"', sold: 189, revenue: 189000 },
    { name: 'MacBook Air M2', sold: 156, revenue: 156000 },
    { name: 'Wireless Headphones', sold: 342, revenue: 34200 },
    { name: 'Smart Watch', sold: 278, revenue: 55600 }
  ];

  // ✅ Add recentSales property (this was missing)
  recentSales = [
    {
      invoice_no: 'INV-001',
      customer_name: 'Rahman Store',
      total_amount: 12500,
      payment_status: 'PAID',
      sale_date: new Date()
    },
    {
      invoice_no: 'INV-002',
      customer_name: 'Karim Traders',
      total_amount: 8500,
      payment_status: 'UNPAID',
      sale_date: new Date(Date.now() - 86400000)
    },
    {
      invoice_no: 'INV-003',
      customer_name: 'Walk-in Customer',
      total_amount: 3200,
      payment_status: 'PAID',
      sale_date: new Date(Date.now() - 172800000)
    },
    {
      invoice_no: 'INV-004',
      customer_name: 'Sultana Enterprise',
      total_amount: 6700,
      payment_status: 'PARTIAL',
      sale_date: new Date(Date.now() - 259200000)
    },
    {
      invoice_no: 'INV-005',
      customer_name: 'Hasan Brothers',
      total_amount: 9500,
      payment_status: 'PAID',
      sale_date: new Date(Date.now() - 345600000)
    }
  ];

  // ✅ Add lowStockItems property
  lowStockItems = [
    { name: 'Samsung TV Q60B', sku: 'TV-001', quantity: 5, reorderLevel: 10, unit: 'pcs' },
    { name: 'iPhone 15 Pro', sku: 'PH-001', quantity: 3, reorderLevel: 8, unit: 'pcs' },
    { name: 'Wireless Mouse', sku: 'ACC-001', quantity: 8, reorderLevel: 15, unit: 'pcs' },
    { name: 'USB-C Cable', sku: 'ACC-002', quantity: 12, reorderLevel: 20, unit: 'pcs' },
    { name: 'Laptop Stand', sku: 'ACC-003', quantity: 4, reorderLevel: 10, unit: 'pcs' }
  ];

  // ✅ Add recentOrders property
  recentOrders = [
    { id: 'INV-001', customer: 'Rahman Store', amount: 12500, status: 'completed', date: new Date() },
    { id: 'INV-002', customer: 'Karim Traders', amount: 8500, status: 'pending', date: new Date(Date.now() - 86400000) },
    { id: 'INV-003', customer: 'Walk-in Customer', amount: 3200, status: 'completed', date: new Date(Date.now() - 172800000) },
    { id: 'INV-004', customer: 'Sultana Enterprise', amount: 6700, status: 'cancelled', date: new Date(Date.now() - 259200000) },
    { id: 'INV-005', customer: 'Hasan Brothers', amount: 9500, status: 'completed', date: new Date(Date.now() - 345600000) }
  ];

  // ✅ Add recentActivities property
  recentActivities = [
    { user: 'John Doe', action: 'Added new product', target: 'iPhone 15', time: '2 minutes ago', icon: 'plus' },
    { user: 'Jane Smith', action: 'Processed sale', target: 'INV-001', amount: '$12,500', time: '15 minutes ago', icon: 'cart' },
    { user: 'Admin', action: 'Updated stock', target: 'Samsung TV', quantity: '+50', time: '1 hour ago', icon: 'archive' },
    { user: 'Robert', action: 'Added new customer', target: 'Rahman Store', time: '3 hours ago', icon: 'person' }
  ];

  ngOnInit(): void {
    this.updateTime();
    this.timer = setInterval(() => this.updateTime(), 1000);
  }

  ngOnDestroy(): void {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }

  updateTime(): void {
    const now = new Date();
    this.currentTime = now.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit',
      second: '2-digit'
    });
  }

  getStatusClass(status: string): string {
    const classes: { [key: string]: string } = {
      'completed': 'badge-completed',
      'pending': 'badge-pending',
      'cancelled': 'badge-cancelled',
      'PAID': 'badge-paid',
      'UNPAID': 'badge-unpaid',
      'PARTIAL': 'badge-partial'
    };
    return classes[status] || 'badge-default';
  }

  getStockStatusClass(quantity: number, reorderLevel: number): string {
    if (quantity <= 0) return 'out';
    if (quantity <= reorderLevel) return 'low';
    return 'normal';
  }
}