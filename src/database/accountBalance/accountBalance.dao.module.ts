import { Module } from '@nestjs/common';
import { AccountBalanceDAO } from './accountBalance.dao';

@Module({
  imports: [],
  controllers: [],
  providers: [AccountBalanceDAO],
  exports: [AccountBalanceDAO],
})
export class AccountBalanceDAOModule {}
