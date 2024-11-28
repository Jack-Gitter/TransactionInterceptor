import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class AccountBalance {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  user: string;
  @Column()
  balance: number;
}
