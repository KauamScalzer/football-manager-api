import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { SignUpUserDto } from './dtos';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('signup')
  @HttpCode(200)
  async signUp(@Body() user: SignUpUserDto) {
    await this.userService.signUp(user);
  }

  @Post('login')
  @HttpCode(200)
  async login(@Body() user: SignUpUserDto) {
    return await this.userService.login(user);
  }
}
