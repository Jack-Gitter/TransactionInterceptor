import { Pool, PoolClient } from 'pg';

export abstract class ADAO {
  constructor(
    private pool: Pool,
    private client?: PoolClient,
  ) {
    if (this.client) {
      this.client.connect();
    }
  }

  execute(query: string, values: any[]) {
    if (this.client) {
      this.client.query(query, values);
    } else {
      this.pool.query(query, values);
    }
  }

  close() {
    this.client.release();
  }
}
