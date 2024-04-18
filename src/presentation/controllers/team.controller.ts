import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateTeamDto } from './../dtos/create-team-dto';
import { GetTeamDto } from './../dtos/get-team-dto';
import { ITeamService } from './../../domain/interfaces/services/team.service.interface';
import { CreateTeamWithPlayersDto } from '../dtos/create-team-with-players-dto';

@Controller('team')
export class TeamController {
  constructor(
    @Inject(ITeamService)
    private readonly teamService: ITeamService,
  ) {}
  @Post()
  async create(@Body() team: CreateTeamDto) {
    return await this.teamService.create(team);
  }

  @Post('custom')
  async createWithPlayers(@Body() team: CreateTeamWithPlayersDto) {
    return await this.teamService.createWithPlayers(team);
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
