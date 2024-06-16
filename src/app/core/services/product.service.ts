import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private apiService: ApiService) { }

  // Méthode pour obtenir tous les produits
  getProducts(): Observable<any> {
    return this.apiService.get('products');
  }

  // Méthode pour obtenir un produit par son ID
  getProductById(productId: string): Observable<any> {
    return this.apiService.get(`products/${productId}`);
  }

  // Méthode pour créer un nouveau produit
  createProduct(productData: any): Observable<any> {
    return this.apiService.post('products', productData);
  }

  // Méthode pour mettre à jour un produit existant
  updateProduct(productId: string, productData: any): Observable<any> {
    return this.apiService.put(`products/${productId}`, productData);
  }

  // Méthode pour supprimer un produit
  deleteProduct(productId: string): Observable<any> {
    return this.apiService.delete(`products/${productId}`);
  }
}
