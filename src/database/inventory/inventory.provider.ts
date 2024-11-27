import { Provider } from '@nestjs/common';
import { InventoryDAO } from './inventory.dao';
import { ClsService } from 'nestjs-cls';
import { postgresDataSource } from '../datasource';

const inventoryDAOProvider: Provider = {
  provide: InventoryDAO,
  useFactory: (clsService: ClsService) => {
    new InventoryDAO(clsService, postgresDataSource);
  },
  inject: [ClsService],
};
