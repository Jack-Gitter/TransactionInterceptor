import { Injectable, Scope } from '@nestjs/common';
import { ClsService } from 'nestjs-cls';
import { DataSource, EntityManager } from 'typeorm';
import { Inventory } from './inventory.entity';

@Injectable({ scope: Scope.REQUEST })
export class InventoryDAO {
  private queryRunner: EntityManager;
  constructor(cls: ClsService, dataSource: DataSource) {
    console.log('in inventory dao');
    this.queryRunner = cls.get('connection') ?? dataSource.manager;
  }

  // return the id of the item if in stock
  async getStock(itemName: string): Promise<number> {
    const res = await this.queryRunner.query<Inventory>(
      `SELECT count(*) FROM inventory WHERE "itemName" = $1`,
      [itemName],
    );
    return res[0].count;
  }
  async reduceStock(itemName: string): Promise<void> {
    await this.queryRunner.query<Inventory>(
      `UPDATE inventory SET count = count - 1 WHERE "itemName" = $1`,
      [itemName],
    );
  }
}
