import { Module } from '@nestjs/common';
import { inventoryDAOProvider } from './inventory.dao.provider';

@Module({
  imports: [],
  controllers: [],
  providers: [...inventoryDAOProvider],
  exports: [...inventoryDAOProvider],
})
export class InventoryDAOModule {}
