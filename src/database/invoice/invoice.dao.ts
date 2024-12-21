import { Injectable } from '@nestjs/common';
import { Pool, PoolClient } from 'pg';
import { ADAO } from '../ADAO';

Injectable();
export class InvoiceDAO extends ADAO {
  constructor(connection: Pool | PoolClient) {super(connection)}
  async addInvoice(user: string, price: number): Promise<void> {
    this.connection.query('INSERT INTO invoice values ($1, $2, $3)', [
      Math.floor(Math.random() * 100000000),
      user,
      price,
    ]);
  }
}
