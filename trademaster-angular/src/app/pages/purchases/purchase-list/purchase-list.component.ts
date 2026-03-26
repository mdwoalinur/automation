import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { PurchaseService } from '../../../services/purchase.service';
import { SupplierService } from '../../../services/supplier.service';
import { Purchase, Supplier } from '../../../models';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-purchase-list',
  templateUrl: './purchase-list.component.html',
  styleUrls: ['./purchase-list.component.css']
})
export class PurchaseListComponent implements OnInit, OnDestroy {
  
  purchases: Purchase[] = [];
  filteredPurchases: Purchase[] = [];
  suppliers: Supplier[] = [];
  
  // Filters
  searchTerm: string = '';
  selectedSupplier: string = '';
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
  
  Math = Math;
  private subscriptions: Subscription = new Subscription();

  constructor(
    private purchaseService: PurchaseService,
    private supplierService: SupplierService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadPurchases();
    this.loadSuppliers();
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  loadPurchases(): void {
    this.loading = true;
    const sub = this.purchaseService.getPurchases().subscribe({
      next: (data: Purchase[]) => {
        this.purchases = data.map(purchase => ({
          ...purchase,
          supplier_name: (purchase as any).supplier_name || this.getMockSupplierName(purchase.supplier_id)
        }));
        this.filteredPurchases = this.purchases;
        this.totalItems = this.purchases.length;
        this.loading = false;
      },
      error: (err: any) => {
        console.error('API error, using mock data:', err);
        this.loadMockPurchases();
        this.loading = false;
      }
    });
    this.subscriptions.add(sub);
  }

  loadMockPurchases(): void {
    this.purchases = [
      {
        purchase_id: 1,
        purchase_order_no: 'PO-001',
        supplier_id: 1,
        supplier_name: 'ABC Electronics',
        purchase_date: new Date(),
        expected_delivery: new Date(),
        actual_delivery: new Date(),
        subtotal: 50000,
        discount_amount: 0,
        tax_amount: 2500,
        total_amount: 52500,
        paid_amount: 52500,
        due_amount: 0,
        payment_status: 'PAID',
        status: 'RECEIVED',
        notes: '',
        company_id: 1,
        warehouse_id: 1,
        user_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      } as Purchase,
      {
        purchase_id: 2,
        purchase_order_no: 'PO-002',
        supplier_id: 2,
        supplier_name: 'XYZ Garments',
        purchase_date: new Date(),
        expected_delivery: new Date(),
        actual_delivery: null,
        subtotal: 25000,
        discount_amount: 500,
        tax_amount: 1225,
        total_amount: 25725,
        paid_amount: 0,
        due_amount: 25725,
        payment_status: 'UNPAID',
        status: 'PENDING',
        notes: '',
        company_id: 1,
        warehouse_id: 1,
        user_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      } as Purchase
    ];
    this.filteredPurchases = this.purchases;
    this.totalItems = this.purchases.length;
  }

  loadSuppliers(): void {
    const sub = this.supplierService.getSuppliers().subscribe({
      next: (data: Supplier[]) => {
        this.suppliers = data;
      },
      error: (err: any) => {
        console.error('Error loading suppliers:', err);
        this.suppliers = [
          { supplier_id: 1, supplier_name: 'ABC Electronics' } as Supplier,
          { supplier_id: 2, supplier_name: 'XYZ Garments' } as Supplier
        ];
      }
    });
    this.subscriptions.add(sub);
  }

  getMockSupplierName(supplierId: number): string {
    const names: { [key: number]: string } = {
      1: 'ABC Electronics',
      2: 'XYZ Garments'
    };
    return names[supplierId] || 'Unknown Supplier';
  }

  searchPurchases(): void {
    if (!this.searchTerm.trim()) {
      this.filteredPurchases = this.purchases;
    } else {
      const term = this.searchTerm.toLowerCase();
      this.filteredPurchases = this.purchases.filter(purchase =>
        purchase.purchase_order_no.toLowerCase().includes(term) ||
        (purchase as any).supplier_name?.toLowerCase().includes(term)
      );
    }
    this.applyFilters();
  }

  filterBySupplier(): void {
    this.applyFilters();
  }

  filterByStatus(): void {
    this.applyFilters();
  }

  filterByDate(): void {
    this.applyFilters();
  }

  applyFilters(): void {
    let filtered = [...this.purchases];
    
    if (this.searchTerm.trim()) {
      const term = this.searchTerm.toLowerCase();
      filtered = filtered.filter(purchase =>
        purchase.purchase_order_no.toLowerCase().includes(term) ||
        (purchase as any).supplier_name?.toLowerCase().includes(term)
      );
    }
    
    if (this.selectedSupplier) {
      filtered = filtered.filter(purchase => 
        purchase.supplier_id === Number(this.selectedSupplier)
      );
    }
    
    if (this.selectedStatus) {
      filtered = filtered.filter(purchase => 
        purchase.status === this.selectedStatus
      );
    }
    
    if (this.startDate) {
      filtered = filtered.filter(purchase => 
        new Date(purchase.purchase_date) >= new Date(this.startDate)
      );
    }
    if (this.endDate) {
      filtered = filtered.filter(purchase => 
        new Date(purchase.purchase_date) <= new Date(this.endDate)
      );
    }
    
    this.filteredPurchases = filtered;
    this.totalItems = filtered.length;
    this.currentPage = 1;
  }

  clearFilters(): void {
    this.searchTerm = '';
    this.selectedSupplier = '';
    this.selectedStatus = '';
    this.startDate = '';
    this.endDate = '';
    this.filteredPurchases = this.purchases;
    this.totalItems = this.purchases.length;
    this.currentPage = 1;
  }

  addPurchase(): void {
    this.router.navigate(['/purchases/new']);
  }

  viewPurchase(id: number): void {
    this.router.navigate(['/purchases/view', id]);
  }

  editPurchase(id: number): void {
    this.router.navigate(['/purchases/edit', id]);
  }

  receivePurchase(id: number): void {
    this.router.navigate(['/purchases/receive', id]);
  }

  getStatusBadgeClass(status: string): string {
    switch(status) {
      case 'RECEIVED': return 'badge-success';
      case 'PENDING': return 'badge-warning';
      case 'CANCELLED': return 'badge-danger';
      default: return 'badge-secondary';
    }
  }

  getPaymentStatusClass(status: string): string {
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

  get paginatedPurchases(): Purchase[] {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    return this.filteredPurchases.slice(start, end);
  }
}