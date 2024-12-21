import { Body, Controller, Post } from '@nestjs/common';
import { OrdersService } from './orders.service';

@Controller('orders')
export class OrdersController {
  constructor(private ordersService: OrdersService) {}

  @Post()
  async placeOrder(@Body() reqBody: { user: string; itemName: string }) {
    return await this.ordersService.placeOrder(reqBody.itemName, reqBody.user);
  }
}
