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

  stats = {
    totalProducts: 1245,
    todaySales: 45280,
    lowStock: 23,
    totalCustomers: 567
  };

  topProducts = [
    { name: 'iPhone 15 Pro', sold: 245, revenue: 245000 },
    { name: 'Samsung TV 55"', sold: 189, revenue: 189000 },
    { name: 'MacBook Air M2', sold: 156, revenue: 156000 },
    { name: 'Wireless Headphones', sold: 342, revenue: 34200 }
  ];

  recentSales = [
    { invoice_no: 'INV-001', customer_name: 'Rahman Store', total_amount: 12500, payment_status: 'PAID', sale_date: new Date() },
    { invoice_no: 'INV-002', customer_name: 'Karim Traders', total_amount: 8500, payment_status: 'UNPAID', sale_date: new Date() },
    { invoice_no: 'INV-003', customer_name: 'Walk-in Customer', total_amount: 3200, payment_status: 'PAID', sale_date: new Date() }
  ];

  lowStockItems = [
    { name: 'Samsung TV', sku: 'TV-001', quantity: 5, reorderLevel: 10 },
    { name: 'iPhone 15', sku: 'PH-001', quantity: 3, reorderLevel: 8 },
    { name: 'Wireless Mouse', sku: 'ACC-001', quantity: 8, reorderLevel: 15 }
  ];

  ngOnInit(): void {
    this.updateTime();
    this.timer = setInterval(() => this.updateTime(), 1000);
  }

  ngOnDestroy(): void {
    if (this.timer) clearInterval(this.timer);
  }

  updateTime(): void {
    const now = new Date();
    this.currentTime = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  }
}