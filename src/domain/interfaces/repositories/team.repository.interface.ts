import { GetAllTeamPageDto } from 'src/presentation/dtos/get-all-team-page-dto';
import { Team } from '../../entities/team.entity';

export interface ITeamRepository {
  findAll(
    skip: number,
    take: number,
    search?: string,
  ): Promise<GetAllTeamPageDto>;
  findById(id: number): Promise<Team | null>;
}

export const ITeamRepository = Symbol('ITeamRepository');
