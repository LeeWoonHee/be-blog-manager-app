import { IsNumber, IsString } from 'class-validator';

export class UserDto {
  @IsNumber()
  id: number;

  @IsString()
  userId: string;

  @IsString()
  password: string;
}
