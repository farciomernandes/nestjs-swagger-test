import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { UserCreateDto } from './dtos/user/user-create.dto';
import { UserCreatedDto } from './dtos/user/user-created.dto';
import { CreateUserUseCase } from '../core/application/user/create-user-use.case';

@ApiTags('Users')
@Controller('users')
export class UserController {
  constructor(private readonly createUserUseCase: CreateUserUseCase) {}

  @Post()
  @HttpCode(HttpStatus.OK)
  @ApiCreatedResponse({ type: UserCreatedDto })
  async create(@Body() body: UserCreateDto): Promise<UserCreatedDto> {
    return await this.createUserUseCase.execute(body);
  }
}
