import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Team, Tournament } from '.';

@Entity()
export class TournamentTeam {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'tournament_id' })
  tounamentId: number;

  @Column({ name: 'team_id' })
  teamId: number;

  @ManyToOne(() => Tournament, (tournament) => tournament.tournamentTeams)
  @JoinColumn({ name: 'tournament_id' })
  tournament: Tournament;

  @ManyToOne(() => Team, (team) => team.tournamentTeams)
  @JoinColumn({ name: 'team_id' })
  team: Team;
}
