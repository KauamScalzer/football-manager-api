import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Match, TournamentTeam } from '.';

@Entity()
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

  @OneToMany(() => Match, (match) => match.tournament)
  matches: Match[];
}
