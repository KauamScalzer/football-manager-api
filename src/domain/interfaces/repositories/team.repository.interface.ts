import { Team } from '../../entities/team-entity';

export interface ITeamRepository {
  create(team: Team): Promise<Team>;
  findAll(): Promise<Team[]>;
  findById(id: number): Promise<Team | null>;
  update(id: number, team: Team): Promise<void>;
  delete(id: number): Promise<void>;
}

export const ITeamRepository = Symbol('ITeamRepository');
