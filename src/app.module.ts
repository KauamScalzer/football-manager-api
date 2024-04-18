import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PresentationModule } from './presentation/presentation.module';
import { Team } from './domain/entities/team.entity';
import { Player } from './domain/entities/player.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'pwd_root',
      database: 'football_manager_db',
      entities: [Team, Player],
      synchronize: true,
    }),
    PresentationModule,
  ],
})
export class AppModule {}
