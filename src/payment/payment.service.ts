import { Injectable, NotAcceptableException } from '@nestjs/common';
import { AccountBalanceDAO } from 'src/database/accountBalance/accountBalance.dao';

@Injectable()
export class PaymentService {
  constructor(private accountBalanceDAO: AccountBalanceDAO) {}
  async checkAndChargePayment(user: string, price: number) {
    const balance = await this.accountBalanceDAO.getAccountBalance(user);
    if (price > balance) {
      throw new NotAcceptableException('not enough money for transaction');
    }
    await this.accountBalanceDAO.reduceAccountBalance(user, price);
  }
}
