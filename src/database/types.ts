import { Pool, PoolClient } from 'pg';

// eslint-disable-next-line
export type DAO<T> = new (pool: Pool | PoolClient) => T;
