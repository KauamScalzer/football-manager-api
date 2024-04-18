import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('team')
export class Team {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  foundation: number;
}
