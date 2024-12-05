import { Injectable } from '@nestjs/common';
import { Pool, PoolClient } from 'pg';
import { ADAO } from '../ADAO';

Injectable();
export class InvoiceDAO extends ADAO {
  constructor(pool: Pool, client?: PoolClient) {
    super(pool, client);
  }
  async addInvoice(user: string, price: number): Promise<void> {}
}
