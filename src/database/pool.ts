import { Pool } from 'pg';

export const pool = new Pool({
  host: 'localhost',
  user: 'postgres',
  port: 5433,
  password: 'postgres',
  max: 20,
});
