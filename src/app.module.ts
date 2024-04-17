import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TeamModule } from './team/team.module';
import { UserModule } from './user/user.module';
import { DbModule } from './db/db.module';

@Module({
  imports: [TeamModule, UserModule, DbModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
