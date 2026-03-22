import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

 
    private apiUrl = 'http://localhost:8080/products';

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get(this.apiUrl);
  }
  addProduct(product: any) {
  return this.http.post('http://localhost:8080/products', product);
}
}
