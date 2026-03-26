import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './layout/sidebar/sidebar/sidebar.component';
import { HeaderComponent } from './layout/header/header/header.component';
import { DashboardComponent } from './modules/dashboard/dashboard/dashboard.component';
import { ProductListComponent } from './modules/products/product-list/product-list.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule}  from  '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    DashboardComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
