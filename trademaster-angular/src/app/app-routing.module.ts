import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';import { ProductListComponent } from './pages/products/product-list/product-list.component';
import { ProductFormComponent } from './pages/products/product-form/product-form.component';
import { ProductDetailsComponent } from './pages/products/product-details/product-details.component';

// Category Management
import { CategoryListComponent } from './pages/categories/category-list/category-list.component';
import { CategoryFormComponent } from './pages/categories/category-form/category-form.component';

// Inventory Management
import { InventoryComponent } from './pages/inventory/inventory.component';
import { StockMovementComponent } from './pages/inventory/stock-movement/stock-movement.component';
import { StockAdjustmentComponent } from './pages/inventory/stock-adjustment/stock-adjustment.component';
import { LowStockAlertComponent } from './pages/inventory/low-stock-alert/low-stock-alert.component';
import { StockForecastComponent } from './pages/inventory/stock-forecast/stock-forecast.component';

// Sales Management
import { PosComponent } from './pages/sales/pos/pos.component';
import { SaleListComponent } from './pages/sales/sale-list/sale-list.component';
import { SaleDetailsComponent } from './pages/sales/sale-details/sale-details.component';

// Purchase Management
import { PurchaseListComponent } from './pages/purchases/purchase-list/purchase-list.component';
import { PurchaseFormComponent } from './pages/purchases/purchase-form/purchase-form.component';

// Customer & Supplier
import { CustomerListComponent } from './pages/customers/customer-list/customer-list.component';
import { SupplierListComponent } from './pages/suppliers/supplier-list/supplier-list.component';

// Reports
import { ReportsComponent } from './pages/reports/reports.component';

// Guards
import { AuthGuard } from './guards/auth.guard';
import { RoleGuard } from './guards/role.guard';
const routes: Routes = [
  
  // Products Routes
  { path: 'products', component: ProductListComponent, canActivate: [AuthGuard] },
  { path: 'products/new', component: ProductFormComponent, canActivate: [AuthGuard] },
  { path: 'products/edit/:id', component: ProductFormComponent, canActivate: [AuthGuard] },
  { path: 'products/view/:id', component: ProductDetailsComponent, canActivate: [AuthGuard] },
  
  // Categories Routes
  { path: 'categories', component: CategoryListComponent, canActivate: [AuthGuard] },
  { path: 'categories/new', component: CategoryFormComponent, canActivate: [AuthGuard] },
  { path: 'categories/edit/:id', component: CategoryFormComponent, canActivate: [AuthGuard] },
  
  // Inventory Routes
  { path: 'inventory', component: InventoryComponent, canActivate: [AuthGuard] },
  { path: 'inventory/movements', component: StockMovementComponent, canActivate: [AuthGuard] },
  { path: 'inventory/adjustments', component: StockAdjustmentComponent, canActivate: [AuthGuard] },
  { path: 'inventory/low-stock', component: LowStockAlertComponent, canActivate: [AuthGuard] },
  { path: 'inventory/forecast', component: StockForecastComponent, canActivate: [AuthGuard] },
  
  // Sales Routes
  { path: 'sales/pos', component: PosComponent, canActivate: [AuthGuard] },
  { path: 'sales/list', component: SaleListComponent, canActivate: [AuthGuard] },
  { path: 'sales/view/:id', component: SaleDetailsComponent, canActivate: [AuthGuard] },
  
  // Purchases Routes
  { path: 'purchases', component: PurchaseListComponent, canActivate: [AuthGuard] },
  { path: 'purchases/new', component: PurchaseFormComponent, canActivate: [AuthGuard] },
  { path: 'purchases/edit/:id', component: PurchaseFormComponent, canActivate: [AuthGuard] },
  
  // Customers & Suppliers
  { path: 'customers', component: CustomerListComponent, canActivate: [AuthGuard] },
  { path: 'suppliers', component: SupplierListComponent, canActivate: [AuthGuard] },
  
  // Reports
  { path: 'reports', component: ReportsComponent, canActivate: [AuthGuard] },
  
  // Default redirect
  { path: '**', redirectTo: '/dashboard' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
