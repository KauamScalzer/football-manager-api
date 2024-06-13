import { Body, Controller, HttpCode, Param, Patch, Post } from '@nestjs/common';
import { SignUpUserDto } from './dtos';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('signup')
  @HttpCode(200)
  async signUp(@Body() user: SignUpUserDto) {
    return await this.userService.signUp(user);
  }

  @Post('login')
  @HttpCode(200)
  async login(@Body() user: SignUpUserDto) {
    return await this.userService.login(user);
  }

  @Patch(':id')
  @HttpCode(204)
  async updateUserTeam(
    @Param('id') id: number,
    @Body('teamId') teamId: number,
  ) {
    await this.userService.updateUserTeam(id, teamId);
  }
}
