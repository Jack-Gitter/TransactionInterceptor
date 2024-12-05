import { Module } from '@nestjs/common';
import { accountBalanceProvider } from './accountBalance.provider';

@Module({
  imports: [],
  controllers: [],
  providers: [...accountBalanceProvider],
  exports: [...accountBalanceProvider],
})
export class AccountBalanceDAOModule {}
