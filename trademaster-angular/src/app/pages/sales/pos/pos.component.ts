import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { CustomerService } from '../../../services/customer.service';
import { SaleService } from '../../../services/sale.service';
import { Product, Customer, PaymentStatus } from '../../../models';
import { Subscription } from 'rxjs';

interface CartItem {
  product_id: number;
  product_name: string;
  sku: string;
  quantity: number;
  unit_price: number;
  total: number;
  stock: number;
}

@Component({
  selector: 'app-pos',
  templateUrl: './pos.component.html',
  styleUrls: ['./pos.component.css']
})
export class PosComponent implements OnInit, OnDestroy {
  
  // Products
  products: Product[] = [];
  filteredProducts: Product[] = [];
  categories: any[] = [];
  
  // Cart
  cart: CartItem[] = [];
  
  // Customer
  customers: Customer[] = [];
  selectedCustomerId: number = 0;
  
  // Search
  searchTerm: string = '';
  selectedCategory: string = '';
  barcodeInput: string = '';
  
  // Payment
  subtotal: number = 0;
  discountPercent: number = 0;
  discountAmount: number = 0;
  taxPercent: number = 0;
  taxAmount: number = 0;
  totalAmount: number = 0;
  amountPaid: number = 0;
  changeAmount: number = 0;
  paymentMethod: string = 'CASH';
  
  // UI State
  loading: boolean = false;
  error: string = '';
  success: string = '';
  showPaymentModal: boolean = false;
  
  private subscriptions: Subscription = new Subscription();

  constructor(
    private productService: ProductService,
    private customerService: CustomerService,
    private saleService: SaleService
  ) {}

  ngOnInit(): void {
    this.loadProducts();
    this.loadCustomers();
    this.loadCategories();
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  loadProducts(): void {
    this.loading = true;
    const sub = this.productService.getProducts().subscribe({
      next: (data: Product[]) => {
        this.products = data;
        this.filteredProducts = data;
        this.loading = false;
      },
      error: (err : any) => {
        this.error = 'Failed to load products';
        this.loading = false;
        console.error();
      }
    });
    this.subscriptions.add(sub);
  }

  loadCustomers(): void {
    const sub = this.customerService.getCustomers().subscribe({
      next: (data : any) => {
        this.customers = data;
      },
      error: (err : any) => {
        console.error('Error loading customers:', err);
      }
    });
    this.subscriptions.add(sub);
  }

  loadCategories(): void {
    // Mock categories - replace with actual service
    this.categories = [
      { id: 1, name: 'Electronics' },
      { id: 2, name: 'Clothing' },
      { id: 3, name: 'Groceries' }
    ];
  }

  searchProducts(): void {
    if (!this.searchTerm.trim()) {
      this.filteredProducts = this.products;
    } else {
      const term = this.searchTerm.toLowerCase();
      this.filteredProducts = this.products.filter(p =>
        p.product_name.toLowerCase().includes(term) ||
        p.product_code.toLowerCase().includes(term) ||
        (p.sku && p.sku.toLowerCase().includes(term))
      );
    }
  }

  filterByCategory(): void {
    if (this.selectedCategory) {
      this.filteredProducts = this.products.filter(p =>
        p.category_id === Number(this.selectedCategory)
      );
    } else {
      this.filteredProducts = this.products;
    }
    this.searchProducts();
  }

  addToCart(product: Product): void {
    // Check stock
    const stock = product.quantity || 0;
    if (stock <= 0) {
      this.error = 'Product is out of stock!';
      setTimeout(() => this.error = '', 3000);
      return;
    }

    const existingItem = this.cart.find(item => item.product_id === product.product_id);
    
    if (existingItem) {
      if (existingItem.quantity + 1 > stock) {
        this.error = `Only ${stock} items available in stock!`;
        setTimeout(() => this.error = '', 3000);
        return;
      }
      existingItem.quantity++;
      existingItem.total = existingItem.quantity * existingItem.unit_price;
    } else {
      this.cart.push({
        product_id: product.product_id,
        product_name: product.product_name,
        sku: product.sku,
        quantity: 1,
        unit_price: product.selling_price,
        total: product.selling_price,
        stock: stock
      });
    }
    
    this.calculateTotals();
  }

  updateCartQuantity(item: CartItem, newQuantity: number): void {
    if (newQuantity <= 0) {
      this.removeFromCart(item);
      return;
    }
    
    if (newQuantity > item.stock) {
      this.error = `Only ${item.stock} items available in stock!`;
      setTimeout(() => this.error = '', 3000);
      return;
    }
    
    item.quantity = newQuantity;
    item.total = item.quantity * item.unit_price;
    this.calculateTotals();
  }

  removeFromCart(item: CartItem): void {
    const index = this.cart.indexOf(item);
    if (index > -1) {
      this.cart.splice(index, 1);
      this.calculateTotals();
    }
  }

  clearCart(): void {
    if (confirm('Are you sure you want to clear the cart?')) {
      this.cart = [];
      this.calculateTotals();
    }
  }

  calculateTotals(): void {
    this.subtotal = this.cart.reduce((sum, item) => sum + item.total, 0);
    this.discountAmount = (this.subtotal * this.discountPercent) / 100;
    this.taxAmount = ((this.subtotal - this.discountAmount) * this.taxPercent) / 100;
    this.totalAmount = this.subtotal - this.discountAmount + this.taxAmount;
    this.calculateChange();
  }

  calculateChange(): void {
    this.changeAmount = this.amountPaid - this.totalAmount;
    if (this.changeAmount < 0) this.changeAmount = 0;
  }

  openPaymentModal(): void {
    if (this.cart.length === 0) {
      this.error = 'Cart is empty!';
      setTimeout(() => this.error = '', 3000);
      return;
    }
    this.showPaymentModal = true;
  }

  closePaymentModal(): void {
    this.showPaymentModal = false;
    this.amountPaid = 0;
    this.changeAmount = 0;
  }
processSale(): void {
  if (this.amountPaid < this.totalAmount) {
    this.error = `Insufficient payment! Need ${(this.totalAmount - this.amountPaid).toFixed(2)} more.`;
    setTimeout(() => this.error = '', 3000);
    return;
  }

  this.loading = true;
  
  let paymentStatus: PaymentStatus = 'UNPAID';
  if (this.amountPaid >= this.totalAmount) {
    paymentStatus = 'PAID';
  } else if (this.amountPaid > 0) {
    paymentStatus = 'PARTIAL';
  }
  
  const saleData = {
    sale: {
      customer_id: this.selectedCustomerId || undefined,
      sale_date: new Date(),
      subtotal: this.subtotal,
      discount_amount: this.discountAmount,
      tax_amount: this.taxAmount,
      total_amount: this.totalAmount,
      paid_amount: this.amountPaid,
      due_amount: this.totalAmount - this.amountPaid,
      payment_status: paymentStatus,
      payment_method: this.paymentMethod,
      notes: ''
    },
    items: this.cart.map(item => ({
      sales_item_id: 0,   // ✅ ADD THIS
      sale_id: 0,         // ✅ ADD THIS
      product_id: item.product_id,
      quantity: item.quantity,
      unit_price: item.unit_price,
      discount_percent: 0,
      discount_amount: 0,
      tax_rate: this.taxPercent,
      tax_amount: (item.unit_price * item.quantity * this.taxPercent) / 100,
      total_price: item.total
    }))
  };

  const sub = this.saleService.createSale(saleData).subscribe({
    next: (response) => {
      this.success = 'Sale completed successfully!';
      this.printInvoice(response.sale_id);
      this.resetPOS();
      setTimeout(() => this.success = '', 5000);
    },
    error: (err: any) => {
      this.error = 'Failed to process sale';
      this.loading = false;
      console.error(err);
    },
    complete: () => {
      this.loading = false;
    }
  });

  this.subscriptions.add(sub);
}
  resetPOS(): void {
    this.cart = [];
    this.selectedCustomerId = 0;
    this.discountPercent = 0;
    this.taxPercent = 0;
    this.subtotal = 0;
    this.discountAmount = 0;
    this.taxAmount = 0;
    this.totalAmount = 0;
    this.amountPaid = 0;
    this.changeAmount = 0;
    this.showPaymentModal = false;
    this.loading = false;
  }

  printInvoice(saleId: number): void {
    // Will implement print functionality later
    console.log('Print invoice for sale:', saleId);
  }

  applyBarcode(): void {
    if (!this.barcodeInput) return;
    
    const product = this.products.find(p => 
      p.sku === this.barcodeInput || 
      p.product_code === this.barcodeInput
    );
    
    if (product) {
      this.addToCart(product);
      this.barcodeInput = '';
    } else {
      this.error = 'Product not found!';
      setTimeout(() => this.error = '', 3000);
    }
  }

  getCustomerName(customerId: number): string {
    const customer = this.customers.find(c => c.customer_id === customerId);
    return customer ? customer.customer_name : 'Walk-in Customer';
  }
}