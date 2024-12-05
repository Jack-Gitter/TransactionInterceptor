import { Injectable } from '@nestjs/common';
import { Pool } from 'pg';
import { AccountBalanceDAO } from '../accountBalance/accountBalance.dao';

Injectable();
export class TransactionManager {
  constructor(private pool: Pool) {}

  // the end user must call repository.close() when done with use on transaction, that way the connection is closed!
  async getAccountBalanceDAOForTransaction(): Promise<AccountBalanceDAO> {
    return new AccountBalanceDAO(this.pool, await this.pool.connect());
  }
}
