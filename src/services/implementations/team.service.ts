import { Injectable, Inject } from '@nestjs/common';
import { ITeamRepository } from './../../domain/interfaces/repositories/team.repository.interface';
import { Team } from '../../domain/entities/team-entity';
import { GetTeamDto } from 'src/presentation/dtos/get-team-dto';

@Injectable()
export class TeamService {
  constructor(
    @Inject(ITeamRepository)
    private readonly teamRepository: ITeamRepository,
  ) {}

  async create(team: Team) {
    return await this.teamRepository.create(team);
  }

  async findById(id: number): Promise<GetTeamDto | null> {
    return await this.teamRepository.findById(id);
  }

  async findAll(): Promise<GetTeamDto[]> {
    return await this.teamRepository.findAll();
  }

  async update(id: number, team: Team) {
    return await this.teamRepository.update(id, team);
  }

  async delete(id: number) {
    return await this.teamRepository.delete(id);
  }
}
