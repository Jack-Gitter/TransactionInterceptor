import { Module } from '@nestjs/common';
import { InventoryService } from './invoice.service';

@Module({
  imports: [],
  controllers: [],
  providers: [InventoryService],
  exports: [InventoryService]
})
export class InventoryModule {}
