import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from './base.service';
import { Category } from '../models';

@Injectable({
  providedIn: 'root'
})
export class CategoryService extends BaseService {
  constructor(http: HttpClient) {
    super(http, 'categories');
  }

  // Get all categories
  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.apiUrl, { headers: this.getHeaders() });
  }

  // Get categories by company
  getCategoriesByCompany(companyId: number): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.apiUrl}/company/${companyId}`, { headers: this.getHeaders() });
  }

  // Get single category by ID
  getCategoryById(id: number): Observable<Category> {
    return this.http.get<Category>(`${this.apiUrl}/${id}`, { headers: this.getHeaders() });
  }

  // Get sub categories (categories with parent_id)
  getSubCategories(parentId?: number): Observable<Category[]> {
    if (parentId) {
      return this.http.get<Category[]>(`${this.apiUrl}/sub/${parentId}`, { headers: this.getHeaders() });
    }
    return this.http.get<Category[]>(`${this.apiUrl}/sub`, { headers: this.getHeaders() });
  }

  // Get category tree (hierarchical)
  getCategoryTree(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/tree`, { headers: this.getHeaders() });
  }

  // Create new category
  createCategory(category: Category): Observable<Category> {
    return this.http.post<Category>(this.apiUrl, category, { headers: this.getHeaders() });
  }

  // Update category
  updateCategory(id: number, category: Category): Observable<Category> {
    return this.http.put<Category>(`${this.apiUrl}/${id}`, category, { headers: this.getHeaders() });
  }

  // Delete category
  deleteCategory(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`, { headers: this.getHeaders() });
  }
}