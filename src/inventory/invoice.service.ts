import { Injectable, NotFoundException } from '@nestjs/common';
import { InventoryDAO } from 'src/database/inventory/inventory.dao';

@Injectable()
export class InventoryService {
  constructor(private inventoryDAO: InventoryDAO) {}
  async checkAndReduceStock(itemName: string) {
    const stock = await this.inventoryDAO.getStock(itemName);
    if (stock <= 0) {
      throw new NotFoundException(
        'unable to process request. Not enough inventory',
      );
    }
    this.inventoryDAO.reduceStock(itemName);
  }
}
