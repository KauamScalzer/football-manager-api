import { Player } from '../../entities/player.entity';

export interface IPlayerRepository {
  create(player: Player): Promise<Player>;
}

export const IPlayerRepository = Symbol('IPlayerRepository');
