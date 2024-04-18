import { Team } from '../../entities/team-entity';

export interface ITeamService {
  create(team: Omit<Team, 'id'>): Promise<Team | null>;
  findAll(): Promise<Team[]>;
  findById(id: number): Promise<Team | null>;
  update(id: number, team: Partial<Team>): Promise<void>;
  delete(id: number): Promise<void>;
}

export const ITeamService = Symbol('ITeamService');
