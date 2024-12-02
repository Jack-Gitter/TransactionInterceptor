import { Injectable, Scope } from '@nestjs/common';
import { ClsService } from 'nestjs-cls';
import { DataSource, EntityManager } from 'typeorm';

@Injectable({ scope: Scope.REQUEST })
export class AccountBalanceDAO {
  private queryRunner: EntityManager;
  constructor(
    private cls: ClsService,
    private dataSource: DataSource,
  ) {
    this.queryRunner = cls.get('connection') ?? dataSource.manager;
  }
  async getAccountBalance(user: string): Promise<number> {
    this.queryRunner = this.cls.get('connection') ?? this.dataSource.manager;
    const res = await this.queryRunner.query(
      'SELECT * from account_balance WHERE "user" = $1',
      [user],
    );
    return res[0]?.balance || -1;
  }

  async reduceAccountBalance(user: string, price: number): Promise<void> {
    this.queryRunner = this.cls.get('connection') ?? this.dataSource.manager;
    console.log(price)
    await this.queryRunner.query(
      'UPDATE account_balance SET balance = balance - $1',
      [price],
    );
  }
}
