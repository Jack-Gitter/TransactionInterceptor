import { Module } from '@nestjs/common';
import { accountBalanceDAOProvider } from './accountBalance.dao.provider';

@Module({
  imports: [],
  controllers: [],
  providers: [...accountBalanceDAOProvider],
  exports: [...accountBalanceDAOProvider],
})
export class AccountBalanceDAOModule {}
