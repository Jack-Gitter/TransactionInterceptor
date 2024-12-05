import { Module } from '@nestjs/common';
import { invoiceDAOProvider } from './invoice.dao.provider';

@Module({
  imports: [],
  controllers: [],
  providers: [...invoiceDAOProvider],
  exports: [...invoiceDAOProvider],
})
export class InvoiceDAOModule {}
