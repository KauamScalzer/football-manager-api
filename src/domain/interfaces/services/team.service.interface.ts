import { Player } from 'src/domain/entities/player.entity';
import { Team } from '../../entities/team.entity';

export interface ITeamService {
  create(team: Omit<Team, 'id' | 'players'>): Promise<Team>;
  findAll(): Promise<Team[]>;
  findById(id: number): Promise<Team | null>;
  update(id: number, team: Partial<Team>): Promise<void>;
  delete(id: number): Promise<void>;
  createWithPlayers(
    team: Omit<Team, 'id' | 'players'> & {
      players: Omit<Player, 'id' | 'teamId' | 'team'>[];
    },
  ): Promise<Team>;
}

export const ITeamService = Symbol('ITeamService');
