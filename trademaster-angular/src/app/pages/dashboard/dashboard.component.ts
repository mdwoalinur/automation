import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  // Properties for stats
  stats = {
    totalProducts: 0,
    todaySales: 0,
    lowStock: 0,
    totalCustomers: 0
  };
  
  // Top selling products
  topProducts: any[] = [
    { name: 'Samsung TV', sold: 45 },
    { name: 'iPhone 15', sold: 32 },
    { name: 'Men T-Shirt', sold: 28 },
    { name: 'Basmati Rice', sold: 25 }
  ];
  
  // Recent sales
  recentSales: any[] = [
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
      sale_date: new Date()
    },
    {
      invoice_no: 'INV-003',
      customer_name: 'Walk-in Customer',
      total_amount: 3200,
      payment_status: 'PAID',
      sale_date: new Date()
    }
  ];

  constructor() { }

  ngOnInit(): void {
    this.loadStats();
    this.loadRecentSales();
    this.loadTopProducts();
  }

  loadStats(): void {
    // API call will go here
    // For now, using mock data
    this.stats = {
      totalProducts: 245,
      todaySales: 12500,
      lowStock: 12,
      totalCustomers: 89
    };
  }

  loadRecentSales(): void {
    // API call will go here
    // Using mock data for now
    this.recentSales = [
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
        sale_date: new Date()
      },
      {
        invoice_no: 'INV-003',
        customer_name: 'Walk-in Customer',
        total_amount: 3200,
        payment_status: 'PAID',
        sale_date: new Date()
      }
    ];
  }

  loadTopProducts(): void {
    // API call will go here
    this.topProducts = [
      { name: 'Samsung TV', sold: 45 },
      { name: 'iPhone 15', sold: 32 },
      { name: 'Men T-Shirt', sold: 28 },
      { name: 'Basmati Rice', sold: 25 }
    ];
  }
}
