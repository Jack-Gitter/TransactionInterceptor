import { Injectable } from '@nestjs/common';
import { Pool } from 'pg';
import { AccountBalanceDAO } from '../accountBalance/accountBalance.dao';
import { InventoryDAO } from '../inventory/inventory.dao';
import { InvoiceDAO } from '../invoice/invoice.dao';

Injectable();
export class TransactionManager {
  constructor(private pool: Pool) {}

  // the end user must call repository.close() when done with use on transaction, that way the connection is closed!
  async getAccountBalanceDAOForTransaction(): Promise<AccountBalanceDAO> {
    return new AccountBalanceDAO(await this.pool.connect());
  }

  // the end user must call repository.close() when done with use on transaction, that way the connection is closed!
  async getInventoryDAOForTransaction(): Promise<InventoryDAO> {
    return new InventoryDAO(await this.pool.connect());
  }

  // the end user must call repository.close() when done with use on transaction, that way the connection is closed!
  async getinvoiceDAOForTransaction(): Promise<InvoiceDAO> {
    return new InvoiceDAO(await this.pool.connect());
  }
}
