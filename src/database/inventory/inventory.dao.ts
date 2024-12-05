import { Injectable } from '@nestjs/common';
import { Pool, PoolClient } from 'pg';

Injectable();
export class InventoryDAO {
  constructor(private connection: Pool | PoolClient) {}
  async getStock(itemName: string): Promise<number> {
    const res = await this.connection.query(
      `SELECT count(*) FROM inventory WHERE "itemName" = $1`,
      [itemName],
    );
    return res.rowCount;
  }
  async reduceStock(itemName: string): Promise<void> {
    await this.connection.query();
  }
}
