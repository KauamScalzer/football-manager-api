import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { User } from './user-entity';
import { TournamentTeam } from './tournament-team-entity';
import { Match } from './match-entity';

@Entity()
export class Team {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ name: 'url_image' })
  urlImage: string;

  @OneToMany(() => User, (users) => users.team)
  users: User[];

  @OneToMany(
    () => TournamentTeam,
    (tournamentTeam) => tournamentTeam.tournament,
  )
  tournamentTeams: TournamentTeam[];

  @OneToMany(() => Match, (match) => match.homeTeam)
  homeMatches: Match[];

  @OneToMany(() => Match, (match) => match.awayTeam)
  awayMatches: Match[];
}
