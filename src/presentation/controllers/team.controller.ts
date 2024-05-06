import {
  Controller,
  Get,
  Inject,
  Param,
  Query,
  ValidationPipe,
} from '@nestjs/common';
import { GetTeamDto } from './../dtos/get-team-dto';
import { ITeamService } from './../../domain/interfaces/services/team.service.interface';
import { GetAllTeamPageDto } from '../dtos/get-all-team-page-dto';
import { GetAllPageDto } from '../dtos/get-all-page-dto';

@Controller('team')
export class TeamController {
  constructor(
    @Inject(ITeamService)
    private readonly teamService: ITeamService,
  ) {}

  @Get('/:id')
  async findById(@Param('id') id: number): Promise<GetTeamDto> {
    return await this.teamService.findById(id);
  }

  @Get()
  async findAll(
    @Query(new ValidationPipe({ transform: true })) query: GetAllPageDto,
  ): Promise<GetAllTeamPageDto> {
    const { skip, take, search } = query;
    return await this.teamService.findAll(skip, take, search);
  }
}
