import { Module } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { AccountBalanceDAOModule } from 'src/database/accountBalance/accountBalance.dao.module';

@Module({
  imports: [AccountBalanceDAOModule],
  controllers: [],
  providers: [PaymentService],
  exports: [PaymentService],
})
export class PaymentModule {}
