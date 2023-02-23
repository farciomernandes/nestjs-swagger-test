import { BaseUseCase } from 'src/core/base/use-cases/use-case';
import { User } from 'src/core/domain/entities/user.entity';
import { UserRepository } from 'src/core/domain/repositories/user.repository';
import { UserCreatedDto } from 'src/presentation/dtos/user/user-created.dto';
import { UserCreatedMapper } from '../../../core/domain/mappers/user/user-created-mapper';

export class FindAllUserUseCase implements BaseUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  public async execute(): Promise<UserCreatedDto[]> {
    const users: User[] = await this.userRepository.findAll();
    return users.map(
      (user: User): UserCreatedDto => new UserCreatedMapper().mapTo(user),
    );
  }
}
