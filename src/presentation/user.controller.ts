import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { CreateUserUseCase } from 'src/core/application/user/create-user-use.case';
import { UserCreateDto } from './dtos/user/user-create.dto';
import { UserCreatedDto } from './dtos/user/user-created.dto';

@ApiTags('Users')
@Controller('users')
export class UserController {
  constructor(private readonly createUser: CreateUserUseCase) {}

  @Post()
  @HttpCode(HttpStatus.OK)
  @ApiCreatedResponse({ type: UserCreatedDto })
  async create(@Body() body: UserCreateDto): Promise<UserCreatedDto> {
    return await this.createUser.execute(body);
  }
}
