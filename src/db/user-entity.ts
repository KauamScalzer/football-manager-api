import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { Team } from './team-entity';
import { Comment } from './comment-entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column({ name: 'access_token', nullable: true })
  accessToken?: string;

  @Column({ name: 'team_id', nullable: true })
  teamId?: number;

  @ManyToOne(() => Team, (team) => team.users)
  @JoinColumn({ name: 'team_id' })
  team: Team;

  @OneToMany(() => Comment, (comment) => comment.user)
  comments: Comment[];
}
