import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Match } from 'src/db';
import { Repository } from 'typeorm';

@Injectable()
export class RoundsService {
  constructor(
    @InjectRepository(Match)
    private readonly matchRepository: Repository<Match>,
  ) {}

  async getAllByRound(round: number) {
    const result = await this.matchRepository.find({
      where: { round },
      relations: ['homeTeam', 'awayTeam'],
    });
    return result;
  }
}
