import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TeamEntity } from './entities/team-entity';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: async () => ({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'pwd_root',
        database: 'football_manager_db',
        entities: [TeamEntity],
        synchronize: true,
      }),
    }),
  ],
})
export class DbModule {}
