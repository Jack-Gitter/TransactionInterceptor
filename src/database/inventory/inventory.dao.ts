import { Injectable, Scope } from '@nestjs/common';
import { ClsService } from 'nestjs-cls';
import { DataSource, EntityManager } from 'typeorm';

@Injectable({ scope: Scope.REQUEST })
export class InventoryDAO {
  private queryRunner: EntityManager;
  constructor(cls: ClsService, dataSource: DataSource) {
    this.queryRunner = cls.get('connection') ?? dataSource.manager;
  }

  // return the id of the item if in stock
  async checkStock(itemName: string): Promise<number> {
    this.queryRunner.query(
      `SELECT * FROM inventory WHERE "itemName" = :itemname`,
    );
  }
  async reduceStock(id: number): Promise<void> {}
}
