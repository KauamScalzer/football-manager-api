import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { TournamentTeam } from './tournament-team.entity';

@Entity('tournament')
export class Tournament {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  year: number;

  @OneToMany(
    () => TournamentTeam,
    (tournamentTeam) => tournamentTeam.tournament,
  )
  tournamentTeams: TournamentTeam[];
}
