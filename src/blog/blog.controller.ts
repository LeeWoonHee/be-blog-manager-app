import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { CreateBlogDto } from './dto/create-blog.dto';
import { Blog } from '@prisma/client';
import { BlogRepository } from './blog.repository';
import { UpdateBlogDto } from './dto/update-blog.dto';

@Controller('blog')
export class BlogController {
  constructor(private readonly blogRepository: BlogRepository) {}

  @Post()
  create(@Body() createBlogDto: CreateBlogDto): Promise<Blog> {
    return this.blogRepository.saveBlog({ ...createBlogDto });
  }

  @Get()
  findAll() {
    return this.blogRepository.findAllBlog();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    const convertTypeNumber = parseInt(id, 10);
    return this.blogRepository.findOneBlog(convertTypeNumber);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBlogDto: UpdateBlogDto) {
    const convertTypeNumber = parseInt(id, 10);
    return this.blogRepository.updateBlog(convertTypeNumber, updateBlogDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    const convertTypeNumber = parseInt(id, 10);
    return this.blogRepository.deleteBlog(convertTypeNumber);
  }
}
