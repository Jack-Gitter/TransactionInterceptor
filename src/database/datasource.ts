import { DataSource } from 'typeorm';
import { Invoice } from './invoice/invoice.entity';
import { Inventory } from './inventory/inventory.entity';

export const postgresDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5433,
  username: 'postgres',
  password: 'postgres',
  database: 'test',
  entities: [Invoice, Inventory],
  subscribers: [],
  migrations: [`${__dirname}/migrations/*.js`],
});
