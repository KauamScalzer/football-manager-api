import { Module } from '@nestjs/common';
import { TeamController } from './controllers/team.controller';
import { ServicesModule } from './../services/services.module';

@Module({
  imports: [ServicesModule],
  providers: [],
  exports: [],
  controllers: [TeamController],
})
export class PresentationModule {}
