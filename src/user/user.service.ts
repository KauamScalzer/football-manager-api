import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './../db';
import { Repository } from 'typeorm';
import { SignUpUserDto } from './dtos';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async signUp(user: SignUpUserDto): Promise<void> {
    const userExist = await this.userRepository.findOne({
      where: { username: user.username },
    });
    if (userExist) {
      throw new HttpException('Username already exists', HttpStatus.CONFLICT);
    }
    user.password = await bcrypt.hash(user.password, 10);
    await this.userRepository.save(user);
  }

  async login(user: SignUpUserDto): Promise<string> {
    const userExist = await this.userRepository.findOne({
      where: { username: user.username },
    });
    if (userExist) {
      const validPassword = await bcrypt.compare(
        user.password,
        userExist.password,
      );
      if (validPassword) {
        const token = await jwt.sign({ id: userExist.id }, 'abc123');
        await this.userRepository.update(userExist.id, { accessToken: token });
        return token;
      }
    }
    throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
  }
}
