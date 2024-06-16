import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { OrderService } from '../../../core/services/order.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {
  orders: any[] = [];

  constructor(private orderService: OrderService, private router: Router) {}

  ngOnInit(): void {
    this.loadOrders();
  }

  loadOrders(): void {
    this.orderService.getOrders().subscribe(
      data => {
        this.orders = data;
      },
      error => {
        console.error('Error loading orders', error);
      }
    );
  }

  viewOrderDetails(orderId: string): void {
    this.router.navigate(['/orders', orderId]);
  }

  deleteOrder(orderId: string): void {
    if (confirm('Êtes-vous sûr de vouloir supprimer cette commande?')) {
      this.orderService.deleteOrder(orderId).subscribe(
        response => {
          this.loadOrders(); // Recharger les commandes après suppression
        },
        error => {
          console.error('Error deleting order', error);
        }
      );
    }
  }
}
