import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './create-user.dto';
import { hashSync as bcryptHashSync } from 'bcrypt';

@Injectable()
export class UserService {
  create (user: CreateUserDto) {
    console.log(bcryptHashSync(user.password, 10))
  }
}
