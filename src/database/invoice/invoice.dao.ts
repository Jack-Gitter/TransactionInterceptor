import { Injectable, Scope } from '@nestjs/common';
import { ClsService } from 'nestjs-cls';
import { DataSource, EntityManager } from 'typeorm';

@Injectable({ scope: Scope.REQUEST })
export class InvoiceDAO {
  private queryRunner: EntityManager;
  constructor(
    private cls: ClsService,
    private dataSource: DataSource,
  ) {
    this.queryRunner = cls.get('connection') ?? dataSource.manager;
  }
  async addInvoice(user: string, price: number): Promise<void> {
    this.queryRunner = this.cls.get('connection') ?? this.dataSource.manager;
    await this.queryRunner.query('INSERT INTO invoice values ($1, $2, $3)', [
      Math.floor(Math.random() * 1000000000),
      user,
      price,
    ]);
  }
}
