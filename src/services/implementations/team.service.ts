import { Injectable, Inject } from '@nestjs/common';
import { ITeamRepository } from './../../domain/interfaces/repositories/team.repository.interface';
import { Team } from '../../domain/entities/team.entity';
import { ITeamService } from '../../domain/interfaces/services/team.service.interface';
import { GetAllTeamPageDto } from 'src/presentation/dtos/get-all-team-page-dto';

@Injectable()
export class TeamService implements ITeamService {
  constructor(
    @Inject(ITeamRepository)
    private readonly teamRepository: ITeamRepository,
  ) {}

  async findById(id: number): Promise<Team | null> {
    return await this.teamRepository.findById(id);
  }

  async findAll(
    skip: number,
    take: number,
    search?: string,
  ): Promise<GetAllTeamPageDto> {
    return await this.teamRepository.findAll(skip, take, search);
  }
}
