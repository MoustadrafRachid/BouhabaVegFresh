import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; 
import { OrderService } from '../../../core/services/order.service';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss']
})
export class OrderDetailComponent implements OnInit {
  order: any;

  constructor(
    private route: ActivatedRoute,
    private orderService: OrderService
  ) {}

  ngOnInit(): void {
    const orderId = this.route.snapshot.paramMap.get('id');
    this.orderService.getOrderById(orderId).subscribe(
      data => {
        this.order = data;
      },
      error => {
        console.error('Error fetching order details', error);
      }
    );
  }
}
