import { Injectable } from '@nestjs/common';
import { Pool, PoolClient } from 'pg';

Injectable();
export class AccountBalanceDAO {
  constructor(private connection: Pool | PoolClient) {}
  async getAccountBalance(user: string): Promise<number> {
    const res = await this.connection.query(
      `SELECT * from account_balance WHERE "user" = $1`,
      [user],
    );
    return res.rows[0]?.balance || -1;
  }
  async reduceAccountBalance(user: string, price: number): Promise<void> {
    await this.connection.query(
      'UPDATE account_balance SET balance = balance - $1',
      [price],
    );
  }
}
