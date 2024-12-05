import { Injectable } from '@nestjs/common';

Injectable();
export class InventoryDAO {
  constructor() {}
  async getStock(itemName: string): Promise<number> {}
  async reduceStock(itemName: string): Promise<void> {}
}
