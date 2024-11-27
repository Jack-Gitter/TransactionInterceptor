import { Module } from '@nestjs/common';
import { InvoiceDAO } from './invoice.dao';

@Module({
  imports: [],
  controllers: [],
  providers: [InvoiceDAO],
  exports: [InvoiceDAO],
})
export class InvoiceDAOModule {}
