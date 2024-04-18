import { Injectable, Inject } from '@nestjs/common';
import { ITeamRepository } from './../../domain/interfaces/repositories/team.repository.interface';
import { IPlayerRepository } from './../../domain/interfaces/repositories/player.repository.interface';
import { Team } from '../../domain/entities/team.entity';
import { ITeamService } from '../../domain/interfaces/services/team.service.interface';
import { Player } from 'src/domain/entities/player.entity';

@Injectable()
export class TeamService implements ITeamService {
  constructor(
    @Inject(ITeamRepository)
    private readonly teamRepository: ITeamRepository,
    @Inject(IPlayerRepository)
    private readonly playerRepository: IPlayerRepository,
  ) {}

  async create(team: Team) {
    return await this.teamRepository.create(team);
  }

  async createWithPlayers(
    team: Omit<Team, 'id'> & { players: Omit<Player, 'id' | 'teamId'>[] },
  ): Promise<Team> {
    const createdTeam = await this.teamRepository.create(team);
    team.players.forEach(async (player) => {
      await this.playerRepository.create({ teamId: createdTeam.id, ...player });
    });
    return createdTeam;
  }

  async findById(id: number): Promise<Team | null> {
    return await this.teamRepository.findById(id);
  }

  async findAll(): Promise<Team[]> {
    return await this.teamRepository.findAll();
  }

  async update(id: number, team: Team) {
    return await this.teamRepository.update(id, team);
  }

  async delete(id: number) {
    return await this.teamRepository.delete(id);
  }
}
