import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Team } from './../domain/entities/team.entity';

import { ITeamRepository } from './../domain/interfaces/repositories/team.repository.interface';

import { TeamRepository } from './repositories/team.repository';
import { Tournament } from 'src/domain/entities/tournament.entity';
import { TournamentTeam } from 'src/domain/entities/tournament-team.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Team, Tournament, TournamentTeam])],
  providers: [{ provide: ITeamRepository, useClass: TeamRepository }],
  exports: [{ provide: ITeamRepository, useClass: TeamRepository }],
})
export class InfrastructureModule {}
