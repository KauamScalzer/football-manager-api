import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PresentationModule } from './presentation/presentation.module';
import { Team } from './domain/entities/team.entity';
import { Tournament } from './domain/entities/tournament.entity';
import { TournamentTeam } from './domain/entities/tournament-team.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'pwd_root',
      database: 'football_manager_db',
      entities: [Team, Tournament, TournamentTeam],
      synchronize: true,
    }),
    PresentationModule,
  ],
})
export class AppModule {}
