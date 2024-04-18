import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Player } from './player.entity';

@Entity('team')
export class Team {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  foundation: number;

  @OneToMany(() => Player, (player) => player.team)
  players: Player[];
}
