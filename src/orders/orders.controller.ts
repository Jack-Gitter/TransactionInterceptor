import { Controller, Post, UseInterceptors } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { TransactionInterceptor } from 'src/utils/interceptors/transactionInterceptor';

@Controller('orders')
  @UseInterceptors(TransactionInterceptor)
export class OrdersController {
  constructor(private ordersService: OrdersService) {}

  @Post()
  async placeOrder() {
    return await this.ordersService.placeOrder('test', 'blah', 1);
  }
}
