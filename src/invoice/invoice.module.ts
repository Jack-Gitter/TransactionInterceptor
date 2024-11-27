import { Module } from '@nestjs/common';
import { InvoiceService } from './invoice.service';
import { InvoiceDAOModule } from 'src/database/invoice/invoice.dao.module';

@Module({
  imports: [InvoiceDAOModule],
  controllers: [],
  providers: [InvoiceService],
  exports: [InvoiceService]
})
export class InvoiceModule {}
