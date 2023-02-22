import { BaseUseCase } from 'src/core/base/use-cases/use-case';
import { CreateUserMapper } from 'src/core/domain/mappers/user/create-user-mapper';
import { UserRepository } from 'src/core/domain/repositories/user.repository';
import { UserCreateDto } from 'src/presentation/dtos/user/user-create.dto';
import { UserCreatedDto } from 'src/presentation/dtos/user/user-created.dto';

export class CreateUserUseCase implements BaseUseCase {
  constructor(
    private readonly createUserMapper: CreateUserMapper,
    private readonly userRepository: UserRepository,
  ) {}

  public async execute({
    name,
    email,
    password,
  }: UserCreateDto): Promise<UserCreatedDto> {
    const user = await this.userRepository.save({ name, email, password });
    return this.createUserMapper.mapTo(user);
  }
}
