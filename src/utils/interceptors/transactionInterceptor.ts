import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { ClsService } from 'nestjs-cls';
import { Observable, tap } from 'rxjs';
import { DataSource } from 'typeorm';

@Injectable()
export class TransactionInterceptor implements NestInterceptor {
  constructor(
    private dataSource: DataSource,
    private cls: ClsService,
  ) {}

  async intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Promise<Observable<any>> {
    console.log('in the interceptor');
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    console.log('starting transaction');
    const manager = queryRunner.manager;
    this.cls.set('connection', manager);
    return next.handle().pipe(
      tap({
        next: async (val) => {
          console.log('comitting transaction');
          await queryRunner.commitTransaction();
          return val;
        },
        error: async (error) => {
          console.log('rolling back transaction');
          await queryRunner.rollbackTransaction();
          throw error;
        },
      }),
    );
  }
}
