import { Injectable } from '@nestjs/common';
import { Pool, PoolClient } from 'pg';

Injectable();
export class AccountBalanceDAO {
  constructor(private connection: Pool | PoolClient) {}
  async getAccountBalance(user: string): Promise<number> {}
  async reduceAccountBalance(user: string, price: number): Promise<void> {}
}
