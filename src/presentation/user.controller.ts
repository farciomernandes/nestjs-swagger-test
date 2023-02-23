import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { ApiCreatedResponse, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UserCreateDto } from './dtos/user/user-create.dto';
import { UserCreatedDto } from './dtos/user/user-created.dto';
import { CreateUserUseCase } from '../core/application/user/create-user-use.case';
import { FindAllUserUseCase } from '../core/application/user/find-all-user-use.case';
@ApiTags('Users')
@Controller('users')
export class UserController {
  constructor(
    private readonly createUserUseCase: CreateUserUseCase,
    private readonly findAllUserUseCase: FindAllUserUseCase,
  ) {}

  @Post()
  @HttpCode(HttpStatus.OK)
  @ApiCreatedResponse({ type: UserCreatedDto })
  async create(@Body() body: UserCreateDto): Promise<UserCreatedDto> {
    return await this.createUserUseCase.execute(body);
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  @ApiResponse({
    status: 200,
    type: UserCreatedDto,
    isArray: true,
  })
  async findAll(): Promise<UserCreatedDto[]> {
    return await this.findAllUserUseCase.execute();
  }
}
