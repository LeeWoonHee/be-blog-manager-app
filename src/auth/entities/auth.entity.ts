import { Column, PrimaryColumn } from 'typeorm';

export class Auth {
  @PrimaryColumn()
  id: number;
  @Column()
  userId: string;
  @Column()
  password: string;
}
