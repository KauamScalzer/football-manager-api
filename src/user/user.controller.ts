import { Body, Controller, Post } from '@nestjs/common';
import { SignUpUserDto } from './dtos';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('signup')
  async signUp(@Body() user: SignUpUserDto) {
    await this.userService.signUp(user);
  }

  @Post('login')
  async login(@Body() user: SignUpUserDto) {
    const token = await this.userService.login(user);
    if (token) {
      return token;
    } else {
      throw new Error();
    }
  }
}
