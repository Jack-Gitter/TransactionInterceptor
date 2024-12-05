import { Injectable } from '@nestjs/common';

Injectable();
export class AccountBalanceDAO {
  constructor() {}
  async getAccountBalance(user: string): Promise<number> {}
  async reduceAccountBalance(user: string, price: number): Promise<void> {}
}
