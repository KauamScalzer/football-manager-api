import { GetAllTeamPageDto } from 'src/presentation/dtos/get-all-team-page-dto';
import { Team } from '../../entities/team.entity';

export interface ITeamService {
  findAll(
    skip: number,
    take: number,
    search?: string,
  ): Promise<GetAllTeamPageDto>;
  findById(id: number): Promise<Team | null>;
}

export const ITeamService = Symbol('ITeamService');
