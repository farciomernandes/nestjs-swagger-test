import { Provider } from '@nestjs/common';
import { getDataSourceToken } from '@nestjs/typeorm';
import { CreateUserUseCase } from 'src/core/application/user/create-user-use.case';
import { FindAllUserUseCase } from 'src/core/application/user/find-all-user-use.case';
import { User } from 'src/core/domain/entities/user.entity';
import { CreateUserMapper } from 'src/core/domain/mappers/user/create-user-mapper';
import { UserRepository } from 'src/core/domain/repositories/user.repository';
import { UserTypeOrmRepository } from 'src/infra/db/type-orm/repositories/user-typeorm.repository';
import { DataSource } from 'typeorm';

export const userProvider: Provider[] = [
  {
    provide: CreateUserMapper,
    useClass: CreateUserMapper,
  },
  {
    provide: UserTypeOrmRepository,
    useFactory: (dataSource: DataSource) => {
      return new UserTypeOrmRepository(dataSource.getRepository(User));
    },
    inject: [getDataSourceToken()],
  },
  {
    provide: CreateUserUseCase,
    useFactory: (
      createUserMapper: CreateUserMapper,
      userRepository: UserRepository,
    ): CreateUserUseCase => {
      return new CreateUserUseCase(createUserMapper, userRepository);
    },
    inject: [CreateUserMapper, UserTypeOrmRepository],
  },
  {
    provide: FindAllUserUseCase,
    useFactory: (userRepository: UserRepository): FindAllUserUseCase => {
      return new FindAllUserUseCase(userRepository);
    },
    inject: [UserTypeOrmRepository],
  },
  // {
  //   provide: CreateUserUseCase,
  //   useFactory: (userRepository: UserRepository): CreateUserUseCase => {
  //     return new CreateUserUseCase(userRepository);
  //   },
  //   inject: [UserTypeOrmRepository],
  // },
  // {
  //   provide: GetUserUsecase,
  //   useFactory: (userRepository: UserRepository): GetUserUsecase => {
  //     return new GetUserUsecase(userRepository);
  //   },
  //   inject: [UserTypeOrmRepository],
  // },
  // {
  //   provide: UpdateUserUseCase,
  //   useFactory: (userRepository: UserRepository): UpdateUserUseCase => {
  //     return new UpdateUserUseCase(userRepository);
  //   },
  //   inject: [UserTypeOrmRepository],
  // },
  // {
  //   provide: RemoveUserUseCase,
  //   useFactory: (userRepository: UserRepository): RemoveUserUseCase => {
  //     return new RemoveUserUseCase(userRepository);
  //   },
  //   inject: [UserTypeOrmRepository],
  // },
];
