import { Injectable } from '@nestjs/common';

Injectable()
export class InvoiceDAO {
  constructor() {}
  async addInvoice(user: string, price: number): Promise<void> {}
}
