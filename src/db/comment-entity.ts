import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { User } from './user-entity';

@Entity()
export class Comment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'match_id' })
  matchId: number;

  @Column({ name: 'user_id' })
  userId: number;

  @Column({ type: 'datetime' })
  date: Date;

  @Column()
  comment: string;

  @ManyToOne(() => User, (user) => user.comments)
  @JoinColumn({ name: 'user_id' })
  user: User;
}
