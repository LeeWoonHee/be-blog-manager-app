import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { PrismaService } from 'prisma/prisma.service';
import { AuthRepository } from './auth.repository';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: 'secret123',
      signOptions: {
        expiresIn: '3600',
      },
    }),
  ],
  controllers: [AuthController],
  providers: [PrismaService, AuthRepository, JwtStrategy],
  exports: [AuthRepository],
})
export class AuthModule {}
