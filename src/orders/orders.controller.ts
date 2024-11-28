import { Controller, Post } from '@nestjs/common';
import { OrdersService } from './orders.service';

@Controller('orders')
export class OrdersController {
  constructor(private ordersService: OrdersService) {}

  @Post()
  placeOrder() {
    this.ordersService.placeOrder('test', 'jack', 1);
  }
}
