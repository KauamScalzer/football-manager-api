import { Controller, Get, Param } from '@nestjs/common';
import { RoundsService } from './rounds.service';

@Controller('rounds')
export class RoundsController {
  constructor(private readonly roundsService: RoundsService) {}

  @Get(':round')
  async getAll(@Param() params: any) {
    return await this.roundsService.getAllByRound(params.round);
  }
}
