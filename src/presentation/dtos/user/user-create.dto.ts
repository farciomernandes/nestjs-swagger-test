import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class UserCreateDto {
  @Expose()
  @IsString()
  @ApiProperty({
    description: 'Name to user',
    example: 'John Doe',
    required: true,
    type: String,
  })
  name: string;

  @Expose()
  @IsEmail()
  @ApiProperty({
    description: 'E-mail to user',
    example: 'johndoe@email.com',
    required: true,
    type: String,
  })
  email: string;

  @Expose()
  @ApiProperty({
    description: 'E-mail to user',
    example: 'johndoe@email.com',
    required: true,
    type: String,
  })
  @IsString()
  @IsNotEmpty()
  password: string;
}
