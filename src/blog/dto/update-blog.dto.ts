import { IsString } from 'class-validator';

export class UpdateBlogDto {
  @IsString()
  title: string;

  @IsString()
  description: string;
}
