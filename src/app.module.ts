import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TeamController } from './team/team.controller';
import { TeamService } from './team/team.service';
import { Match, Team, Tournament, TournamentTeam, User, Comment } from './db';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { RoundsController } from './rounds/rounds.controller';
import { RoundsService } from './rounds/rounds.service';
import { TableController } from './table/table.controller';
import { TableService } from './table/table.service';
import { CommentController } from './comment/comment.controller';
import { CommentService } from './comment/comment.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'pwd_root',
      database: 'football_manager_db',
      entities: [Team, User, Tournament, TournamentTeam, Match, Comment],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([
      Team,
      User,
      Tournament,
      TournamentTeam,
      Match,
      Comment,
    ]),
  ],
  controllers: [
    TeamController,
    UserController,
    RoundsController,
    TableController,
    CommentController,
  ],
  providers: [
    TeamService,
    UserService,
    RoundsService,
    TableService,
    CommentService,
  ],
})
export class AppModule {}
