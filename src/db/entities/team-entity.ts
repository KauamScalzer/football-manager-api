import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('team')
export class TeamEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  foundation: number;
}
