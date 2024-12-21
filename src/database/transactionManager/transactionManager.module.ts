import { Module } from '@nestjs/common';
import { transactionMangagerProvider } from './transactionManager.provider';

@Module({
  imports: [],
  controllers: [],
  providers: [...transactionMangagerProvider],
  exports: [...transactionMangagerProvider],
})
export class TransactionManagerModule {}
