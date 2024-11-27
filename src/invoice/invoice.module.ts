import { Module } from '@nestjs/common';
import { InvoiceService } from './invoice.service';

@Module({
  imports: [],
  controllers: [],
  providers: [InvoiceService],
  exports: [InvoiceService]
})
export class InvoiceModule {}
