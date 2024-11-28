import { Injectable, Scope } from '@nestjs/common';
import { ClsService } from 'nestjs-cls';
import { DataSource, EntityManager } from 'typeorm';
import { Inventory } from './inventory.entity';

@Injectable({ scope: Scope.REQUEST })
export class InventoryDAO {
  private queryRunner: EntityManager;
  constructor(
    private cls: ClsService,
    private dataSource: DataSource,
  ) {
    this.queryRunner = cls.get('connection') ?? dataSource.manager;
  }

  // return the id of the item if in stock
  async getStock(itemName: string): Promise<number> {
    this.queryRunner = this.cls.get('connection') ?? this.dataSource.manager;
    const res = await this.queryRunner.query<Inventory>(
      `SELECT count(*) FROM inventory WHERE "itemName" = $1`,
      [itemName],
    );
    return res[0].count;
  }
  async reduceStock(itemName: string): Promise<void> {
    this.queryRunner = this.cls.get('connection') ?? this.dataSource.manager;
    await this.queryRunner.query<Inventory>(
      `UPDATE inventory SET count = count - 1 WHERE "itemName" = $1`,
      [itemName],
    );
  }
}
