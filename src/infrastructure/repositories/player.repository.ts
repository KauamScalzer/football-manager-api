import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Player } from '../../domain/entities/player.entity';
import { IPlayerRepository } from '../../domain/interfaces/repositories/player.repository.interface';

@Injectable()
export class PlayerRepository implements IPlayerRepository {
  constructor(
    @InjectRepository(Player)
    private readonly repository: Repository<Player>,
  ) {}

  async create(player: Player): Promise<Player> {
    return this.repository.save(player);
  }
}
