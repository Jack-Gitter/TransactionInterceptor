import { Provider } from '@nestjs/common';
import { pool } from '../pool';
import { InvoiceDAO } from './invoice.dao';

export const invoiceDAOProvider: Provider[] = [
  {
    provide: InvoiceDAO,
    useFactory: async () => {
      return new InvoiceDAO(pool);
    },
  },
];
