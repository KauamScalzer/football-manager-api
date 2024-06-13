import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CommentService } from './comment.service';

@Controller('comment')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @Get('/by-match/:matchId')
  async getAll(@Param() params: any) {
    return await this.commentService.getAllByMatch(params.matchId);
  }

  @Post()
  async add(@Body() params: any) {
    await this.commentService.add(params);
  }
}
