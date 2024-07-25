import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Blog {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  description: string;
}
