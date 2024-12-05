import { Controller, Post } from '@nestjs/common';
import { OrdersService } from './orders.service';

@Controller('orders')
export class OrdersController {
  constructor(private ordersService: OrdersService) {}

  @Post()
  async placeOrder() {
    return await this.ordersService.placeOrder('test', 'jack', 1000);
  }
}
