import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('team')
export class Team {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ name: 'official_name' })
  officialName: string;

  @Column()
  foundation: number;
}
