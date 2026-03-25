import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Layouts
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

// Guards
import { AuthGuard } from './guards/auth.guard';

// Pages
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProductListComponent } from './pages/products/product-list/product-list.component';
import { PosComponent } from './pages/sales/pos/pos.component';
import { InventoryComponent } from './pages/inventory/inventory.component';
import { SaleListComponent } from './pages/sales/sale-list/sale-list.component';
import { PurchaseListComponent } from './pages/purchases/purchase-list/purchase-list.component';
import { CustomerListComponent } from './pages/customers/customer-list/customer-list.component';
import { SupplierListComponent } from './pages/suppliers/supplier-list/supplier-list.component';
import { ReportsComponent } from './pages/reports/reports.component';
import { SaleDetailsComponent } from './pages/sales/sale-details/sale-details.component';

// Auth Components (Create these if needed)
import { LoginComponent } from './pages/auth/login/login/login.component';
import { RegisterComponent } from './pages/auth/register/register/register.component';

const routes: Routes = [
  // Default redirect
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  
  // Auth Routes
  {
    path: 'auth',
    component: AuthLayoutComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent }
    ]
  },

  // Main Routes with Layout
  {
    path: '',
    component: MainLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'products', component: ProductListComponent },
      { path: 'sales/pos', component: PosComponent },
      { path: 'sales/list', component: SaleListComponent },
      { path: 'inventory', component: InventoryComponent },
      { path: 'purchases', component: PurchaseListComponent },
      { path: 'customers', component: CustomerListComponent },
      { path: 'suppliers', component: SupplierListComponent },
      { path: 'reports', component: ReportsComponent },
      { path: 'sales/view/:id', component: SaleDetailsComponent }
    ]
  },
  
  // Fallback - redirect to dashboard if route not found
  { path: '**', redirectTo: '/dashboard' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }