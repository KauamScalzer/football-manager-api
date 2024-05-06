import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Team } from './../domain/entities/team.entity';

import { ITeamRepository } from './../domain/interfaces/repositories/team.repository.interface';

import { TeamRepository } from './repositories/team.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Team])],
  providers: [{ provide: ITeamRepository, useClass: TeamRepository }],
  exports: [{ provide: ITeamRepository, useClass: TeamRepository }],
})
export class InfrastructureModule {}
