import { Body, Controller, Post } from '@nestjs/common';

import { UserDto } from './dto/user.dto';
import { AuthRepository } from './auth.repository';

@Controller('auth')
export class AuthController {
  constructor(private readonly authRepository: AuthRepository) {}

  @Post('/signin')
  signIn(@Body() userDto: UserDto) {
    return this.authRepository.signIn(userDto);
  }
}
