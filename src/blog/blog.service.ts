import { Injectable } from '@nestjs/common';

import { BlogRepository } from './blog.repository';

@Injectable()
export class BlogService {
  constructor(private blogRepository: BlogRepository) {}
}
