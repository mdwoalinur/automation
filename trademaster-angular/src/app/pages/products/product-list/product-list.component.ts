import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../../../services/product.service';
import { CategoryService } from '../../../services/category.service';
import { Product, Category } from '../../../models';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  // Data Arrays
  products: Product[] = [];
  filteredProducts: Product[] = [];
  categories: Category[] = [];
  
  // Filter Properties
  searchTerm: string = '';
  selectedCategory: string = '';
  selectedStatus: string = '';
  
  // UI State
  loading: boolean = false;
  error: string = '';
  success: string = '';
  
  // Pagination
  currentPage: number = 1;
  itemsPerPage: number = 10;
  totalItems: number = 0;
  
  // Math object for template
  Math = Math;

  constructor(
    private productService: ProductService,
    private categoryService: CategoryService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadProducts();
    this.loadCategories();
  }

    loadProducts(): void {
    this.loading = true;
    const sub = this.productService.loadProducts().subscribe({
      next: (data: Product[]) => {
        this.products = data;
        this.filteredProducts = data;
        this.totalItems = data.length;
        this.loading = false;
      },
      error: (err: any) => {
        this.error = 'Failed to load products. Please try again.';
        this.loading = false;
        console.error('Error loading products:', err);
      }
    });
    
  }

  // Load categories for filter - FIXED: using getCategories() instead of getSubCategories()
  loadCategories(): void {
    this.categoryService.getCategories().subscribe({
      next: (data: Category[]) => {
        this.categories = data;
      },
      error: (err: any) => {
        console.error('Error loading categories:', err);
      }
    });
  }

  // Search products by name or code
  searchProducts(): void {
    if (!this.searchTerm.trim()) {
      this.filteredProducts = this.products;
    } else {
      const term = this.searchTerm.toLowerCase();
      this.filteredProducts = this.products.filter(product =>
        product.product_name.toLowerCase().includes(term) ||
        product.product_code.toLowerCase().includes(term) ||
        (product.sku && product.sku.toLowerCase().includes(term))
      );
    }
    this.applyFilters();
  }

  // Filter by category
  filterByCategory(): void {
    this.applyFilters();
  }

  // Filter by status
  filterByStatus(): void {
    this.applyFilters();
  }

  // Apply all filters
  applyFilters(): void {
    let filtered = [...this.products];
    
    // Apply search filter
    if (this.searchTerm.trim()) {
      const term = this.searchTerm.toLowerCase();
      filtered = filtered.filter(product =>
        product.product_name.toLowerCase().includes(term) ||
        product.product_code.toLowerCase().includes(term)
      );
    }
    
    // Apply category filter
    if (this.selectedCategory) {
      filtered = filtered.filter(product => 
        product.category_id === Number(this.selectedCategory)
      );
    }
    
    // Apply status filter
    if (this.selectedStatus) {
      filtered = filtered.filter(product => 
        product.status === this.selectedStatus
      );
    }
    
    this.filteredProducts = filtered;
    this.totalItems = filtered.length;
    this.currentPage = 1;
  }

  // Clear all filters
  clearFilters(): void {
    this.searchTerm = '';
    this.selectedCategory = '';
    this.selectedStatus = '';
    this.filteredProducts = this.products;
    this.totalItems = this.products.length;
    this.currentPage = 1;
  }

  // Navigate to add product
  addProduct(): void {
    this.router.navigate(['/products/new']);
  }

  // Navigate to edit product
  editProduct(id: number): void {
    this.router.navigate(['/products/edit', id]);
  }

  // Navigate to view product details
  viewProduct(id: number): void {
    this.router.navigate(['/products/view', id]);
  }
  
// Delete product with confirmation - FIXED VERSION
deleteProduct(id: number, productName: string): void {
  if (confirm(`Are you sure you want to delete "${productName}"?`)) {
    this.loading = true;
    this.productService.deleteProduct(id).subscribe({
      next: () => {  // ← removed unused parameter
        this.success = 'Product deleted successfully!';
        this.loadProducts();
        setTimeout(() => {
          this.success = '';
        }, 3000);
      },
      error: (err: any) => {
        this.error = 'Failed to delete product.';
        this.loading = false;
        console.error('Error deleting product:', err);
        setTimeout(() => {
          this.error = '';
        }, 3000);
      },
      complete: () => {
        this.loading = false;
      }
    });
  }
}


  // Get category name by ID
  getCategoryName(categoryId: number): string {
    const category = this.categories.find(c => c.category_id === categoryId);
    return category ? category.category_name : 'Uncategorized';
  }

  // Get stock status badge class
  getStockStatusClass(quantity: number, reorderLevel: number): string {
    if (quantity <= 0) return 'status-out';
    if (quantity <= reorderLevel) return 'status-low';
    return 'status-normal';
  }

  // Get stock status text
  getStockStatusText(quantity: number, reorderLevel: number): string {
    if (quantity <= 0) return 'Out of Stock';
    if (quantity <= reorderLevel) return 'Low Stock';
    return 'In Stock';
  }

  // Get status badge class
  getStatusClass(status: string): string {
    return status === 'ACTIVE' ? 'status-active' : 'status-inactive';
  }

  // Change page
  onPageChange(page: number): void {
    this.currentPage = page;
  }

  // Get paginated products
  get paginatedProducts(): Product[] {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    return this.filteredProducts.slice(start, end);
  }
}