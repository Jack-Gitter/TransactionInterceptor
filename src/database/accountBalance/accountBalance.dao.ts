import { Injectable } from '@nestjs/common';
import { Pool, PoolClient } from 'pg';
import { ADAO } from '../ADAO';

Injectable();
export class AccountBalanceDAO extends ADAO {
  constructor(connection: Pool | PoolClient) {
    super(connection);
  }
  async getAccountBalance(user: string): Promise<number> {
    const res = await this.connection.query(
      `SELECT * from account_balance WHERE "user" = $1`,
      [user],
    );
    return res.rows[0].balance;
  }
  async reduceAccountBalance(user: string, price: number): Promise<void> {
    this.connection.query(
      'UPDATE account_balance SET balance = balance - $1 WHERE user = $2',
      [price, user],
    );
  }
}
