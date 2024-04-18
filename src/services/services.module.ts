import { TeamService } from './implementations/team.service';
import { InfrastructureModule } from 'src/infrastructure/infrastructure.module';
import { Module } from '@nestjs/common';
import { ITeamService } from './../domain/interfaces/services/team.service.interface';

@Module({
  imports: [InfrastructureModule],
  providers: [{ provide: ITeamService, useClass: TeamService }],
  exports: [{ provide: ITeamService, useClass: TeamService }],
})
export class ServicesModule {}
