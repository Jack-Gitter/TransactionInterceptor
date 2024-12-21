import { Module } from '@nestjs/common';
import { TransactionManager } from './transactionManager';

@Module({
  imports: [],
  controllers: [],
  providers: [TransactionManager],
  exports: [TransactionManager],
})
export class TransactionManagerModule {}
