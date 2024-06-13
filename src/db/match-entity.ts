import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Team } from './team-entity';
import { Tournament } from './tournament-entity';

@Entity()
export class Match {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'tournament_id' })
  tounamentId: number;

  @Column()
  round: number;

  @Column({ type: 'datetime' })
  date: Date;

  @Column({ name: 'home_team_id' })
  homeTeamId: number;

  @Column({ name: 'home_team_goals', nullable: true })
  homeTeamGols?: number;

  @Column({ name: 'away_team_id' })
  awayTeamId: number;

  @Column({ name: 'away_team_goals', nullable: true })
  awayTeamGols?: number;

  @ManyToOne(() => Team, (team) => team.homeMatches)
  @JoinColumn({ name: 'home_team_id' })
  homeTeam: Team;

  @ManyToOne(() => Team, (team) => team.awayMatches)
  @JoinColumn({ name: 'away_team_id' })
  awayTeam: Team;

  @ManyToOne(() => Tournament, (tournament) => tournament.matches)
  @JoinColumn({ name: 'tournament_id' })
  tournament: Tournament;
}
