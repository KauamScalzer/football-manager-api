import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Team } from './team.entity';
import { Tournament } from './tournament.entity';

@Entity('tournament_team')
export class TournamentTeam {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'team_id' })
  teamId: number;

  @Column({ name: 'tournament_id' })
  tournamentId: number;

  @Column()
  wins: number;

  @Column()
  loses: number;

  @Column()
  draws: number;

  @Column()
  points: number;

  @ManyToOne(() => Team, (team) => team.tournamentTeams)
  @JoinColumn({ name: 'team_id' })
  team: Team;

  @ManyToOne(() => Tournament, (tournament) => tournament.tournamentTeams)
  @JoinColumn({ name: 'tournament_id' })
  tournament: Tournament;
  // vitoria derrota empate pontos ultimas 5
}
