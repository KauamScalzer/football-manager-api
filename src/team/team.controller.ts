import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateTeamDto } from './dtos/create-team-dto';
import { TeamService } from './team.service';
import { GetTeamDto } from './dtos/get-team-dto';

@Controller('team')
export class TeamController {
  constructor(private readonly teamService: TeamService) {}
  @Post()
  async create(@Body() task: CreateTeamDto) {
    await this.teamService.create(task);
  }

  @Get('/:id')
  async findById(@Param('id') id: number): Promise<GetTeamDto> {
    return await this.teamService.findById(id);
  }

  @Get('')
  async findAll(): Promise<GetTeamDto[]> {
    return await this.teamService.findAll();
  }

  @Put('/:id')
  async update(@Param('id') id: number, @Body() team: CreateTeamDto) {
    await this.teamService.update(id, team);
  }

  @Delete('/:id')
  async delete(@Param('id') id: number) {
    await this.teamService.delete(id);
  }
}
