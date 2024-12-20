import { Module } from '@nestjs/common';
import { OrdersController } from './orders.controller';
import { PaymentModule } from 'src/payment/payment.module';
import { InvoiceModule } from 'src/invoice/invoice.module';
import { InventoryModule } from 'src/inventory/invoice.module';
import { OrdersService } from './orders.service';
import { TransactionManagerModule } from 'src/database/transactionManager/transactionManager.module';

@Module({
  imports: [
    PaymentModule,
    InvoiceModule,
    InventoryModule,
    TransactionManagerModule,
  ],
  controllers: [OrdersController],
  providers: [OrdersService],
  exports: [OrdersService],
})
export class OrdersModule {}
