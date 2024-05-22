import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TeamController } from './team/team.controller';
import { TeamService } from './team/team.service';
import { Team, User } from './db';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'pwd_root',
      database: 'football_manager_db',
      entities: [Team, User],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Team, User]),
  ],
  controllers: [TeamController, UserController],
  providers: [TeamService, UserService],
})
export class AppModule {}
