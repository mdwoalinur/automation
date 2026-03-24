// src/app/app.module.ts

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// ========== Layout Components ==========
import { SidebarComponent } from './component/components/layout/sidebar/sidebar.component';
import { HeaderComponent } from './component/components/layout/header/header.component';
import { FooterComponent } from './component/components/layout/footer/footer.component';

// ========== Layouts ==========
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

// ========== Guards ==========
import { AuthGuard } from './guards/auth.guard';
import { RoleGuard } from './guards/role.guard';

// ========== Page Components ==========
import { DashboardComponent } from './pages/dashboard/dashboard.component';

// Products
import { ProductListComponent } from './pages/products/product-list/product-list.component';
import { ProductFormComponent } from './pages/products/product-form/product-form.component';
import { ProductDetailsComponent } from './pages/products/product-details/product-details.component';

// Categories
import { CategoryListComponent } from './pages/categories/category-list/category-list.component';
import { CategoryFormComponent } from './pages/categories/category-form/category-form.component';

// Inventory
import { InventoryComponent } from './pages/inventory/inventory.component';
import { StockMovementComponent } from './pages/inventory/stock-movement/stock-movement.component';
import { StockAdjustmentComponent } from './pages/inventory/stock-adjustment/stock-adjustment.component';
import { LowStockAlertComponent } from './pages/inventory/low-stock-alert/low-stock-alert.component';
import { StockForecastComponent } from './pages/inventory/stock-forecast/stock-forecast.component';

// Sales
import { PosComponent } from './pages/sales/pos/pos.component';
import { SaleListComponent } from './pages/sales/sale-list/sale-list.component';
import { SaleDetailsComponent } from './pages/sales/sale-details/sale-details.component';

// Purchases
import { PurchaseListComponent } from './pages/purchases/purchase-list/purchase-list.component';
import { PurchaseFormComponent } from './pages/purchases/purchase-form/purchase-form.component';

// Customers & Suppliers
import { CustomerListComponent } from './pages/customers/customer-list/customer-list.component';
import { SupplierListComponent } from './pages/suppliers/supplier-list/supplier-list.component';

// Reports
import { ReportsComponent } from './pages/reports/reports.component';

// ========== Services ==========
import { ProductService } from './services/product.service';
import { CategoryService } from './services/category.service';
import { InventoryService } from './services/inventory.service';
import { SaleService } from './services/sale.service';
import { PurchaseService } from './services/purchase.service';
import { CustomerService } from './services/customer.service';
import { SupplierService } from './services/supplier.service';
import { ReportService } from './services/report.service';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    MainLayoutComponent,
    AuthLayoutComponent,
    DashboardComponent,
    ProductListComponent,
    ProductFormComponent,
    ProductDetailsComponent,
    CategoryListComponent,
    CategoryFormComponent,
    InventoryComponent,
    StockMovementComponent,
    StockAdjustmentComponent,
    LowStockAlertComponent,
    StockForecastComponent,
    PosComponent,
    SaleListComponent,
    SaleDetailsComponent,
    PurchaseListComponent,
    PurchaseFormComponent,
    CustomerListComponent,
    SupplierListComponent,
    ReportsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule
  ],
  providers: [
    AuthGuard,
    RoleGuard,
    ProductService,
    CategoryService,
    InventoryService,
    SaleService,
    PurchaseService,
    CustomerService,
    SupplierService,
    ReportService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }