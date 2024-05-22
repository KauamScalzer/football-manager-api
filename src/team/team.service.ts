import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Team } from './../db';
import { Like, Repository } from 'typeorm';
import { GetTeamParams } from './dtos';

@Injectable()
export class TeamService {
  constructor(
    @InjectRepository(Team)
    private readonly teamRepository: Repository<Team>,
  ) {}

  async getAll(params: GetTeamParams) {
    params.skip = (params.skip - 1) * params.take;
    const query = params.search
      ? { where: { name: Like(`%${params.search}%`) } }
      : {};
    const [result, count] = await this.teamRepository.findAndCount({
      ...query,
      take: params.take,
      skip: params.skip,
    });
    return { result, count };
  }
}
