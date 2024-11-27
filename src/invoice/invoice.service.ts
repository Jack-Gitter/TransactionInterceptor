import { Injectable } from '@nestjs/common';
import { InvoiceDAO } from 'src/database/invoice/invoice.dao';

@Injectable()
export class InvoiceService {
  constructor(private invoiceDAO: InvoiceDAO) {}
  async provideInvoice(user: string, price: number) {
    this.invoiceDAO.addInvoice(user, price);
  }
}
