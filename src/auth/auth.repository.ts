import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { UserDto } from './dto/user.dto';
import { JwtService } from '@nestjs/jwt';

type SuccessLoginType = {
  accessToken: string;
  message: string;
};

@Injectable()
export class AuthRepository {
  constructor(
    private readonly prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async signIn(userDto: UserDto): Promise<SuccessLoginType> {
    const { userId, password } = userDto;

    const user = await this.prisma.user.findUnique({
      where: { userId },
    });
    const passwordValid = await this.prisma.user.findUnique({
      where: { password },
    });

    if (user && passwordValid) {
      const payload = { userId };
      const accessToken = this.jwtService.sign(payload);
      return {
        accessToken,
        message: 'login seuccess',
      };
    }
    throw new UnauthorizedException('login failed');
  }
}
