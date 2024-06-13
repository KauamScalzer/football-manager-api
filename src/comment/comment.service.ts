import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Comment } from 'src/db';
import { Repository } from 'typeorm';

@Injectable()
export class CommentService {
  constructor(
    @InjectRepository(Comment)
    private readonly commentRepository: Repository<Comment>,
  ) {}

  async getAllByMatch(id: number) {
    const result = await this.commentRepository.find({
      where: { matchId: id },
      relations: ['user'],
    });
    return result;
  }

  async add(params: any) {
    params.date = new Date();
    await this.commentRepository.save(params);
  }
}
