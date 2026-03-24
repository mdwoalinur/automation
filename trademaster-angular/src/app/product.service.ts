import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  deleteProduct(id: number) {
    throw new Error('Method not implemented.');
  }

 
    private apiUrl = 'http://localhost:8080/products';

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get(this.apiUrl);
  }
  addProduct(product: any) {
  return this.http.post('http://localhost:8080/products', product);
}
}
