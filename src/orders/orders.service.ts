import { Injectable } from '@nestjs/common';
import { AccountBalanceDAO } from 'src/database/accountBalance/accountBalance.dao';
import { InventoryDAO } from 'src/database/inventory/inventory.dao';
import { InvoiceDAO } from 'src/database/invoice/invoice.dao';
import { TransactionManager } from 'src/database/transactionManager/transactionManager';
import { InventoryService } from 'src/inventory/invoice.service';
import { InvoiceService } from 'src/invoice/invoice.service';
import { PaymentService } from 'src/payment/payment.service';

@Injectable()
export class OrdersService {
  constructor(
    private paymentService: PaymentService,
    private inventoryService: InventoryService,
    private invoiceService: InvoiceService,
    private transactionManager: TransactionManager,
  ) {}
  async placeOrder(itemName: string, user: string) {
    const price = await this.inventoryService.getPrice(itemName);
    await this.paymentService.checkAndChargePayment(user, price);
    await this.inventoryService.checkAndReduceStock(itemName);
    await this.invoiceService.provideInvoice(user, price);
  }
  async placeOrderTransaction(itemName: string, user: string) {
    const [daosForTransaction, connection] =
      await this.transactionManager.getDAOsForTransaction(
        InventoryDAO,
        InvoiceDAO,
        AccountBalanceDAO,
      );

    const inventoryService = new InventoryService(daosForTransaction[0]);
    const invoiceService = new InvoiceService(daosForTransaction[1]);
    const paymentService = new PaymentService(daosForTransaction[2]);

    connection.query('BEGIN TRANSACTION');

    try {
      const price = await this.inventoryService.getPrice(itemName);
      await paymentService.checkAndChargePayment(user, price);
      await inventoryService.checkAndReduceStock(itemName);
      await invoiceService.provideInvoice(user, price);
    } catch (e: unknown) {
      connection.query('ROLLBACK');
      throw e;
    } finally {
      connection.release();
    }
  }
}
