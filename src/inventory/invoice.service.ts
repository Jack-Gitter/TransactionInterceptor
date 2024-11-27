import { Injectable } from '@nestjs/common';
import { InventoryDAO } from 'src/database/inventory/inventory.dao';

@Injectable()
export class InventoryService {
  constructor(private inventoryDAO: InventoryDAO) {}
  async checkAndReduceStock(itemName: string) {
    this.inventoryDAO.checkStock(itemName);
    this.inventoryDAO.reduceStock(itemName);
  }
}
