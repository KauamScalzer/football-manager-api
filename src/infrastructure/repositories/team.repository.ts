import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Team } from '../../domain/entities/team-entity';
import { ITeamRepository } from '../../domain/interfaces/repositories/team.repository.interface';

@Injectable()
export class TeamRepository implements ITeamRepository {
  constructor(
    @InjectRepository(Team)
    private readonly repository: Repository<Team>,
  ) {}

  async create(team: Team): Promise<Team> {
    return this.repository.save(team);
  }

  async findById(id: number): Promise<Team | null> {
    return await this.repository.findOne({ where: { id } });
  }

  async findAll(): Promise<Team[]> {
    return await this.repository.find();
  }

  async update(id: number, team: Partial<Team>): Promise<void> {
    await this.repository.update(id, team);
  }

  async delete(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
