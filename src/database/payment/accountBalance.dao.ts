import { Injectable, Scope } from '@nestjs/common';
import { ClsService } from 'nestjs-cls';
import { DataSource, EntityManager } from 'typeorm';

@Injectable({ scope: Scope.REQUEST })
export class AccountBalanceDAO {
  private queryRunner: EntityManager;
  constructor(cls: ClsService, dataSource: DataSource) {
    this.queryRunner = cls.get('connection') ?? dataSource.manager;
  }
  async getAccountBalance(user: string): Promise<void> {
    this.queryRunner.query(
      'SELECT balance from AccountBalance WHERE user = $1',
      [user],
    );
  }

  async reduceAccountBalance(user: string, price: number): Promise<void> {
    this.queryRunner.query(
      'UPDATE balance SET balance = balance - $1 WHERE user = $2',
      [price, user],
    );
  }
}
