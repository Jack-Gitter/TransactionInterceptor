import { Injectable } from '@nestjs/common';
import { Pool, PoolClient } from 'pg';

Injectable();
export class InvoiceDAO {
  constructor(private connection: Pool | PoolClient) {}
  async addInvoice(user: string, price: number): Promise<void> {}
}
