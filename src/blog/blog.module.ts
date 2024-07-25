import { Module } from '@nestjs/common';
import { BlogRepository } from './blog.repository';
import { PrismaService } from 'prisma/prisma.service';
import { BlogController } from './blog.controller';

@Module({
  controllers: [BlogController],
  providers: [BlogRepository, PrismaService],
  exports: [BlogRepository],
})
export class BlogModule {}
