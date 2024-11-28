import { Module } from '@nestjs/common';
import { OrdersController } from './orders/orders.controller';
import { InvoiceModule } from './invoice/invoice.module';
import { PaymentModule } from './payment/payment.module';
import { InventoryModule } from './inventory/invoice.module';
import { OrdersModule } from './orders/orders.module';
import { InvoiceDAOModule } from './database/invoice/invoice.dao.module';
import { InventoryDAOModule } from './database/inventory/inventory.dao.module';
import { ClsModule } from 'nestjs-cls';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Invoice } from './database/invoice/invoice.entity';
import { Inventory } from './database/inventory/inventory.entity';
import { AccountBalanceDAOModule } from './database/accountBalance/accountBalance.dao.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5433,
      username: 'postgres',
      password: 'postgres',
      database: 'test',
      entities: [Invoice, Inventory],
    }),
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
