import { Module } from '@nestjs/common';
import { InventoryService } from './invoice.service';
import { InventoryDAOModule } from 'src/database/inventory/inventory.dao.module';

@Module({
  imports: [InventoryDAOModule],
  controllers: [],
  providers: [InventoryService],
  exports: [InventoryService]
})
export class InventoryModule {}
