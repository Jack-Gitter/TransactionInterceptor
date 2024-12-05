import { Module } from '@nestjs/common';
import { OrdersController } from './orders/orders.controller';
import { InvoiceModule } from './invoice/invoice.module';
import { PaymentModule } from './payment/payment.module';
import { InventoryModule } from './inventory/invoice.module';
import { OrdersModule } from './orders/orders.module';
import { InvoiceDAOModule } from './database/invoice/invoice.dao.module';
import { InventoryDAOModule } from './database/inventory/inventory.dao.module';
import { ClsModule } from 'nestjs-cls';
import { AccountBalanceDAOModule } from './database/accountBalance/accountBalance.dao.module';

@Module({
  imports: [
    ClsModule.forRoot({
      global: true,
      middleware: { mount: true },
    }),
    InventoryModule,
    InvoiceModule,
    PaymentModule,
    OrdersModule,
    InvoiceDAOModule,
    AccountBalanceDAOModule,
    InventoryDAOModule,
  ],
  controllers: [OrdersController],
  providers: [],
})
export class AppModule {}
