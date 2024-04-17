import { Injectable } from '@nestjs/common';
import { CreateTeamDto } from './dtos/create-team-dto';
import { GetTeamDto } from './dtos/get-team-dto';
import { InjectRepository } from '@nestjs/typeorm';
import { TeamEntity } from 'src/db/entities/team-entity';
import { Repository } from 'typeorm';

@Injectable()
export class TeamService {
  constructor(
    @InjectRepository(TeamEntity)
    private readonly teamRepository: Repository<TeamEntity>
  ){}

  async create(team: CreateTeamDto) {
    return await this.teamRepository.save(team)
  }

  async findById(id: number): Promise<GetTeamDto | null> {
    return await this.teamRepository.findOne({ where: { id } })
  }
}
