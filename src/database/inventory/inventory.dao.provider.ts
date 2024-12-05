import { Provider } from '@nestjs/common';
import { pool } from '../pool';
import { InventoryDAO } from './inventory.dao';

export const inventoryDAOProvider: Provider[] = [
  {
    provide: InventoryDAO,
    useFactory: async () => {
      return new InventoryDAO(pool);
    },
  },
];
