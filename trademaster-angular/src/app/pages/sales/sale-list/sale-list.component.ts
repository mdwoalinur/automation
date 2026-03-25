import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { SaleService } from '../../../services/sale.service';
import { Sale } from '../../../models';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sale-list',
  templateUrl: './sale-list.component.html',
  styleUrls: ['./sale-list.component.css']
})
export class SaleListComponent implements OnInit, OnDestroy {
   Math = Math;
  sales: Sale[] = [];
  filteredSales: Sale[] = [];
  
  // Filters
  searchTerm: string = '';
  selectedStatus: string = '';
  startDate: string = '';
  endDate: string = '';
  
  // UI State
  loading: boolean = false;
  error: string = '';
  
  // Pagination
  currentPage: number = 1;
  itemsPerPage: number = 10;
  totalItems: number = 0;
  
  private subscriptions: Subscription = new Subscription();

  constructor(
    private saleService: SaleService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadSales();
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  loadSales(): void {
    this.loading = true;
    const sub = this.saleService.getSales().subscribe({
      next: (data) => {
        this.sales = data;
        this.filteredSales = data;
        this.totalItems = data.length;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Failed to load sales';
        this.loading = false;
        console.error(err);
      }
    });
    this.subscriptions.add(sub);
  }

  searchSales(): void {
    if (!this.searchTerm.trim()) {
      this.filteredSales = this.sales;
    } else {
      const term = this.searchTerm.toLowerCase();
      this.filteredSales = this.sales.filter(sale =>
        sale.invoice_no.toLowerCase().includes(term)
      );
    }
    this.applyFilters();
  }

  filterByStatus(): void {
    this.applyFilters();
  }

  filterByDate(): void {
    this.applyFilters();
  }

  applyFilters(): void {
    let filtered = [...this.sales];
    
    // Search filter
    if (this.searchTerm.trim()) {
      const term = this.searchTerm.toLowerCase();
      filtered = filtered.filter(sale =>
        sale.invoice_no.toLowerCase().includes(term)
      );
    }
    
    // Status filter
    if (this.selectedStatus) {
      filtered = filtered.filter(sale => 
        sale.payment_status === this.selectedStatus
      );
    }
    
    // Date filter
    if (this.startDate) {
      filtered = filtered.filter(sale => 
        new Date(sale.sale_date) >= new Date(this.startDate)
      );
    }
    if (this.endDate) {
      filtered = filtered.filter(sale => 
        new Date(sale.sale_date) <= new Date(this.endDate)
      );
    }
    
    this.filteredSales = filtered;
    this.totalItems = filtered.length;
    this.currentPage = 1;
  }

  clearFilters(): void {
    this.searchTerm = '';
    this.selectedStatus = '';
    this.startDate = '';
    this.endDate = '';
    this.filteredSales = this.sales;
    this.totalItems = this.sales.length;
  }

  viewSale(id: number): void {
    this.router.navigate(['/sales/view', id]);
  }

  printInvoice(id: number): void {
    this.saleService.printInvoice(id).subscribe({
      next: (blob) => {
        const url = window.URL.createObjectURL(blob);
        window.open(url);
      },
      error: (err) => console.error(err)
    });
  }

  getStatusBadgeClass(status: string): string {
    switch(status) {
      case 'PAID': return 'badge-success';
      case 'UNPAID': return 'badge-danger';
      case 'PARTIAL': return 'badge-warning';
      default: return 'badge-secondary';
    }
  }

  onPageChange(page: number): void {
    this.currentPage = page;
  }

  get paginatedSales(): Sale[] {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    return this.filteredSales.slice(start, end);
  }
  
}