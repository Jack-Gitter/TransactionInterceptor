import { Injectable } from '@nestjs/common';
import { Pool, PoolClient } from 'pg';
import { ADAO } from '../ADAO';

Injectable();
export class AccountBalanceDAO extends ADAO {
  constructor(pool: Pool, client?: PoolClient) {
    super(pool, client);
  }
  async getAccountBalance(user: string): Promise<number> {}
  async reduceAccountBalance(user: string, price: number): Promise<void> {}
}
