import { Injectable } from '@nestjs/common';
import { Pool, PoolClient } from 'pg';

Injectable();
export class InventoryDAO {
  constructor(private connection: Pool | PoolClient) {
  }
  async getStock(itemName: string): Promise<number> {}
  async reduceStock(itemName: string): Promise<void> {}
}
