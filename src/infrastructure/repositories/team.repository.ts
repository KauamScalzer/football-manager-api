import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';
import { Team } from '../../domain/entities/team.entity';
import { ITeamRepository } from '../../domain/interfaces/repositories/team.repository.interface';
import { GetAllTeamPageDto } from 'src/presentation/dtos/get-all-team-page-dto';

@Injectable()
export class TeamRepository implements ITeamRepository {
  constructor(
    @InjectRepository(Team)
    private readonly repository: Repository<Team>,
  ) {}
  async findById(id: number): Promise<Team | null> {
    return await this.repository.findOne({ where: { id } });
  }

  async findAll(
    skip: number,
    take: number,
    search?: string,
  ): Promise<GetAllTeamPageDto> {
    skip = (skip - 1) * take;
    const query = search ? { where: { name: Like(`%${search}%`) } } : {};
    const [result, count] = await this.repository.findAndCount({
      ...query,
      take: take,
      skip: skip,
    });
    return { result, count };
  }
}
