import { Controller, Get, Param, Post } from '@nestjs/common';
import { TableService } from './table.service';

@Controller('table')
export class TableController {
  constructor(private readonly tableService: TableService) {}

  @Get(':id')
  async get(@Param() id: number) {
    return await this.tableService.get(id);
  }

  @Post('/insert-matches')
  async insert() {
    await this.tableService.insert();
  }

  @Get('/by-team/:teamId')
  async getLastThreeMatchesWithTeams(@Param() params: any) {
    return await this.tableService.getLastThreeMatchesWithTeams(params.teamId);
  }

  @Get('/get-match/:matchId')
  async getMatch(@Param() params: any) {
    return await this.tableService.getMatch(params.matchId);
  }
}
