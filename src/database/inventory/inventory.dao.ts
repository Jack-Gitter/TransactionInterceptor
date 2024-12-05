import { Injectable } from '@nestjs/common';
import { Pool, PoolClient } from 'pg';
import { ADAO } from '../ADAO';

Injectable();
export class InventoryDAO extends ADAO {
  constructor(pool: Pool, client?: PoolClient) {
    super(pool, client);
  }
  async getStock(itemName: string): Promise<number> {}
  async reduceStock(itemName: string): Promise<void> {}
}
