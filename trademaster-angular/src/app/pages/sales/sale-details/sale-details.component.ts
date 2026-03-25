import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SaleService } from '../../../services/sale.service';
import { ProductService } from '../../../services/product.service';
import { CustomerService } from '../../../services/customer.service';
import { Sale, SaleItem, Customer, Product } from '../../../models';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sale-details',
  templateUrl: './sale-details.component.html',
  styleUrls: ['./sale-details.component.css']
})
export class SaleDetailsComponent implements OnInit, OnDestroy {
  
  // Data
  sale: Sale | null = null;
  saleItems: SaleItem[] = [];
  customer: Customer | null = null;
  products: Product[] = [];
  
  // UI State
  loading: boolean = false;
  error: string = '';
  saleId: number = 0;
  
  // Print
  printMode: boolean = false;
  
  private subscriptions: Subscription = new Subscription();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private saleService: SaleService,
    private customerService: CustomerService,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.saleId = +params['id'];
      if (this.saleId) {
        this.loadSaleDetails();
        this.loadProducts();
      }
    });
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  loadSaleDetails(): void {
    this.loading = true;
    const sub = this.saleService.getSale(this.saleId).subscribe({
      next: (data) => {
        this.sale = data;
        this.loadSaleItems();
        if (this.sale.customer_id) {
          this.loadCustomer(this.sale.customer_id);
        }
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Failed to load sale details';
        this.loading = false;
        console.error(err);
      }
    });
    this.subscriptions.add(sub);
  }

  loadSaleItems(): void {
    const sub = this.saleService.getSaleItems(this.saleId).subscribe({
      next: (data) => {
        this.saleItems = data;
      },
      error: (err) => {
        console.error('Error loading sale items:', err);
      }
    });
    this.subscriptions.add(sub);
  }

  loadCustomer(customerId: number): void {
    const sub = this.customerService.getCustomer(customerId).subscribe({
      next: (data) => {
        this.customer = data;
      },
      error: (err) => {
        console.error('Error loading customer:', err);
      }
    });
    this.subscriptions.add(sub);
  }

  loadProducts(): void {
    const sub = this.productService.getProducts().subscribe({
      next: (data) => {
        this.products = data;
      },
      error: (err) => {
        console.error('Error loading products:', err);
      }
    });
    this.subscriptions.add(sub);
  }

  getProductName(productId: number): string {
    const product = this.products.find(p => p.product_id === productId);
    return product ? product.product_name : 'Unknown Product';
  }

  getProductSku(productId: number): string {
    const product = this.products.find(p => p.product_id === productId);
    return product ? product.sku : '---';
  }

  getStatusBadgeClass(status: string): string {
    switch(status) {
      case 'PAID': return 'badge-paid';
      case 'UNPAID': return 'badge-unpaid';
      case 'PARTIAL': return 'badge-partial';
      case 'COMPLETED': return 'badge-completed';
      case 'CANCELLED': return 'badge-cancelled';
      default: return 'badge-default';
    }
  }

  getStatusIcon(status: string): string {
    switch(status) {
      case 'PAID': return 'bi-check-circle-fill';
      case 'UNPAID': return 'bi-x-circle-fill';
      case 'PARTIAL': return 'bi-clock-fill';
      default: return 'bi-question-circle-fill';
    }
  }

  printInvoice(): void {
    this.printMode = true;
    setTimeout(() => {
      window.print();
      setTimeout(() => {
        this.printMode = false;
      }, 1000);
    }, 500);
  }

  goBack(): void {
    this.router.navigate(['/sales/list']);
  }

  editSale(): void {
    this.router.navigate(['/sales/edit', this.saleId]);
  }

  formatDate(date: Date | string): string {
    if (!date) return '---';
    const d = new Date(date);
    return d.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  }
}