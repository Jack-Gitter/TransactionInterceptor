import { Injectable, Scope } from '@nestjs/common';
import { ClsService } from 'nestjs-cls';
import { DataSource, EntityManager } from 'typeorm';

@Injectable({ scope: Scope.REQUEST })
export class AccountBalanceDAO {
  private queryRunner: EntityManager;
  constructor(cls: ClsService, dataSource: DataSource) {
    this.queryRunner = cls.get('connection') ?? dataSource.manager;
  }
  async getAccountBalance(user: string): Promise<number> {
    const res = await this.queryRunner.query(
      'SELECT * from account_balance WHERE "user" = $1',
      [user],
    );
    return res[0]?.balance || -1;
  }

  async reduceAccountBalance(user: string, price: number): Promise<void> {
    await this.queryRunner.query(
      'UPDATE account_balance SET balance = balance - $1 WHERE user = $2',
      [price, user],
    );
  }
}
