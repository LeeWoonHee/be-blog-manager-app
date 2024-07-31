// src/blog/blog.repository.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBlogDto } from './dto/create-blog.dto';
import { Blog } from '@prisma/client';
import { PrismaService } from 'prisma/prisma.service';
import { UpdateBlogDto } from './dto/update-blog.dto';

@Injectable()
export class BlogRepository {
  constructor(private readonly prisma: PrismaService) {}

  async saveBlog(createBlogDto: CreateBlogDto): Promise<Blog> {
    const { description, title } = createBlogDto;
    const blogLength = await this.prisma.blog.count();
    const allBlog = await this.prisma.blog.findMany();
    console.log('asdasdasdasd');
    console.log(allBlog[blogLength - 1].id + 1);

    if (blogLength > 0) {
      return this.prisma.blog.create({
        data: { id: allBlog[blogLength - 1].id + 1, title, description },
      });
    } else {
      return this.prisma.blog.create({
        data: { id: 1, title, description },
      });
    }
  }

  async findAllBlog(): Promise<Blog[]> {
    const blogLength = await this.prisma.blog.count();

    if (blogLength < 1) {
      throw new NotFoundException('Not Found Blog List');
    }
    return this.prisma.blog.findMany();
  }

  async findOneBlog(id: number): Promise<Blog> {
    const findBlog = await this.prisma.blog.findUnique({ where: { id } });

    if (!findBlog) {
      throw new NotFoundException(`Not Found id:${id} Blog`);
    }
    return findBlog;
  }

  async updateBlog(id: number, updateBlogData: UpdateBlogDto): Promise<Blog> {
    return this.prisma.blog.update({
      where: { id },
      data: updateBlogData,
    });
  }

  async deleteBlog(id: number): Promise<Blog> {
    const findBlog = await this.prisma.blog.findUnique({ where: { id } });
    if (!findBlog) {
      throw new NotFoundException(`Not Found id:${id} Blog`);
    }
    return this.prisma.blog.delete({ where: { id } });
  }
}
