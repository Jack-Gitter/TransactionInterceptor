import { BadRequestException, Injectable } from '@nestjs/common';
import { Pool, PoolClient } from 'pg';
import { ADAO } from '../ADAO';

Injectable();
export class InventoryDAO extends ADAO {
  constructor(connection: Pool | PoolClient) {
    super(connection);
  }
  async getPrice(itemName: string): Promise<number> {
    const res = await this.connection.query(
      `SELECT price FROM inventory WHERE "itemName = $1`,
      [itemName],
    );
    if (!res.rows[0]) {
        throw new BadRequestException('no item found')
    }
    return res.rows[0].price
  }
  async getStock(itemName: string): Promise<number> {
    const res = await this.connection.query(
      `SELECT count FROM inventory WHERE "itemName" = $1`,
      [itemName],
    );
    return res.rows[0]?.count || -1;
  }
  async reduceStock(itemName: string): Promise<void> {
    await this.connection.query(
      `UPDATE inventory SET count = count - 1 WHERE "itemName" = $1`,
      [itemName],
    );
  }
}
