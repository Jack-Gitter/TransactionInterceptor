import { Provider } from '@nestjs/common';
import { AccountBalanceDAO } from './accountBalance.dao';
import { pool } from '../pool';

export const accountBalanceDAOProvider: Provider[] = [
  {
    provide: AccountBalanceDAO,
    useFactory: async () => {
      return new AccountBalanceDAO(pool);
    },
  },
];
