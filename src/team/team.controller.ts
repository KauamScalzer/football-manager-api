import { Body, Controller, Get, Param, Post, Put, Res } from '@nestjs/common';
import { CreateTeamDto } from './dtos/create-team-dto';
import { TeamService } from './team.service';
import { GetTeamDto } from './dtos/get-team-dto';

@Controller('team')
export class TeamController {
  constructor (
    private readonly teamService: TeamService
  ){}
  @Post()
  create(@Body() task: CreateTeamDto) {
    this.teamService.create(task)
  }

  @Get('/:id')
  async findById(@Param('id') id: number): Promise<GetTeamDto> {
    return await this.teamService.findById(id)
  }

  @Put()
  update(@Body() team: CreateTeamDto) {

  }
}
