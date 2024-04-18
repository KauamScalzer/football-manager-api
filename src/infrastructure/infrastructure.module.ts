import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Team } from './../domain/entities/team.entity';
import { Player } from './../domain/entities/player.entity';

import { ITeamRepository } from './../domain/interfaces/repositories/team.repository.interface';
import { IPlayerRepository } from './../domain/interfaces/repositories/player.repository.interface';

import { TeamRepository } from './repositories/team.repository';
import { PlayerRepository } from './repositories/player.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Team, Player])],
  providers: [
    { provide: ITeamRepository, useClass: TeamRepository },
    { provide: IPlayerRepository, useClass: PlayerRepository },
  ],
  exports: [
    { provide: ITeamRepository, useClass: TeamRepository },
    { provide: IPlayerRepository, useClass: PlayerRepository },
  ],
})
export class InfrastructureModule {}
