import { Injectable } from '@nestjs/common';
import { Pool, PoolClient } from 'pg';
import { ADAO } from '../ADAO';

Injectable();
export class InventoryDAO extends ADAO {
  constructor(connection: Pool | PoolClient) {
    super(connection);
  }
  async getStock(itemName: string): Promise<number> {
    const res = await this.connection.query(
      `SELECT count(*) FROM inventory WHERE "itemName" = $1`,
      [itemName],
    );
    return res.rowCount;
  }
  async reduceStock(itemName: string): Promise<void> {
    await this.connection.query(
      `UPDATE inventory SET count = count - 1 WHERE "itemName" = $1`,
      [itemName],
    );
  }
}
