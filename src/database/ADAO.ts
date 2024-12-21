import { Pool, PoolClient } from 'pg';

export abstract class ADAO {
  constructor(protected connection: Pool | PoolClient) {}
  close() {
    if (!(this.connection instanceof Pool)) {
      this.connection.release();
    }
  }
}
