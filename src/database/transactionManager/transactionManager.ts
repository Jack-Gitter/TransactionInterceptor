import { Injectable } from '@nestjs/common';
import { Pool, PoolClient } from 'pg';
import { DAO } from '../types';

Injectable();
export class TransactionManager {
  constructor(private pool: Pool) {}

  // the end user must call repository.close() when done with use on transaction, that way the connection is closed!
  async getDAOsForTransaction(
    ...constructors: DAO<any>[]
  ): Promise<[any[], PoolClient]> {
    const connection = await this.pool.connect();
    return [constructors.map((constructor) => new constructor(connection)), connection];
  }
}
