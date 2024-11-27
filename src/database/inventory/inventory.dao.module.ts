import { Module } from '@nestjs/common';
import { InventoryDAO } from './inventory.dao';

@Module({
  imports: [],
  controllers: [],
  providers: [InventoryDAO],
  exports: [InventoryDAO],
})
export class InventoryDAOModule {}
