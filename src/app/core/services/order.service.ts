import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private apiService: ApiService) { }

  // Méthode pour obtenir toutes les commandes
  getOrders(): Observable<any> {
    return this.apiService.get('orders');
  }

  // Méthode pour obtenir une commande par son ID
  getOrderById(orderId: string): Observable<any> {
    return this.apiService.get(`orders/${orderId}`);
  }

  // Méthode pour créer une nouvelle commande
  createOrder(orderData: any): Observable<any> {
    return this.apiService.post('orders', orderData);
  }

  // Méthode pour mettre à jour une commande existante
  updateOrder(orderId: string, orderData: any): Observable<any> {
    return this.apiService.put(`orders/${orderId}`, orderData);
  }

  // Méthode pour supprimer une commande
  deleteOrder(orderId: string): Observable<any> {
    return this.apiService.delete(`orders/${orderId}`);
  }
}
