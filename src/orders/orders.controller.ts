import { Controller, Post } from '@nestjs/common';

@Controller('orders')
export class OrdersController {
  constructor() {}

  @Post()
  placeOrder() {}
}
