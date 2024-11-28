import { Injectable, NotAcceptableException } from '@nestjs/common';
import { AccountBalanceDAO } from 'src/database/accountBalance/accountBalance.dao';

@Injectable()
export class PaymentService {
  constructor(private accountBalanceDAO: AccountBalanceDAO) {}
  async checkAndChargePayment(user: string, price: number) {
    const balance = await this.accountBalanceDAO.getAccountBalance(user);
    if (balance < 0) {
      throw new NotAcceptableException('broke boy');
    }
    await this.accountBalanceDAO.reduceAccountBalance(user, price);
  }
}
