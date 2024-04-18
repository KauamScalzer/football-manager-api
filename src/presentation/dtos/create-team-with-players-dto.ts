import { CreateTeamDto } from './create-team-dto';

export class CreateTeamWithPlayersDto extends CreateTeamDto {
  players: {
    name: string;
    age: number;
  }[];
}
