import { Provider } from '@nestjs/common';
import { pool } from '../pool';
import { TransactionManager } from './transactionManager';

export const transactionMangagerProvider: Provider[] = [
  {
    provide: TransactionManager,
    useFactory: async () => {
      return new TransactionManager(pool);
    },
  },
];
