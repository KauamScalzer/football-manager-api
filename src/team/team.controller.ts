import { Controller, Get, Query } from '@nestjs/common';
import { TeamService } from './team.service';
import { GetTeamParams } from './dtos';

@Controller('team')
export class TeamController {
  constructor(private readonly teamService: TeamService) {}

  @Get()
  async getAll(@Query() params: GetTeamParams) {
    return await this.teamService.getAll(params);
  }
}
