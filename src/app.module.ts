import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TeamController } from './team/team.controller';
import { TeamService } from './team/team.service';
import { Team } from './db';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'pwd_root',
      database: 'football_manager_db',
      entities: [Team],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Team]),
  ],
  controllers: [TeamController],
  providers: [TeamService],
})
export class AppModule {}
