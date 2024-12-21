import { Injectable } from '@nestjs/common';
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
    private transactionManager: TransactionManager, // eslint-disable-line
  ) {}
  async placeOrder(itemName: string, user: string, price: number) {
    /*const daos = this.transactionManager.getDAOsForTransaction(
      InventoryDAO,
      AccountBalanceDAO,
      InvoiceDAO,
    );*/
    await this.inventoryService.checkAndReduceStock(itemName);
    await this.paymentService.checkAndChargePayment(user, price);
    await this.invoiceService.provideInvoice(user, price);
  }
}
