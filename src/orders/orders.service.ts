import { Injectable } from '@nestjs/common';
import { InventoryService } from 'src/inventory/invoice.service';
import { InvoiceService } from 'src/invoice/invoice.service';
import { PaymentService } from 'src/payment/payment.service';

@Injectable()
export class OrdersService {
  constructor(
    private paymentService: PaymentService,
    private inventoryService: InventoryService,
    private invoiceService: InvoiceService,
  ) {}
  async placeOrder(itemName: string, user: string) {
    const price = await this.inventoryService.getPrice(itemName);
    await this.paymentService.checkAndChargePayment(user, price);
    await this.inventoryService.checkAndReduceStock(itemName);
    await this.invoiceService.provideInvoice(user, price);
  }
}
