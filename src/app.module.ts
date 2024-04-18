import { Module } from '@nestjs/common';
import { TeamModule } from './team/team.module';
import { DbModule } from './db/db.module';

@Module({
  imports: [TeamModule, DbModule],
})
export class AppModule {}
