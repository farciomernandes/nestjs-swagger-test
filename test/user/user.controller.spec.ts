import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { UserController } from '../../src/presentation/user.controller';
import { UserCreateDto } from '../../src/presentation/dtos/user/user-create.dto';
import { User } from '../../src/core/domain/entities/user.entity';
import { CreateUserUseCase } from '../../src/core/application/user/create-user-use.case';

const createdUserMock = new User({
  name: 'Fulano da Silva',
  email: 'fulano2@email.com',
  password: 'senha123',
});

describe('UserController', () => {
  let app: INestApplication;
  let userController: UserController;
  let createUserUseCase: CreateUserUseCase;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [
        {
          provide: CreateUserUseCase,
          useValue: {
            execute: jest.fn().mockResolvedValue(createdUserMock),
          },
        },
      ],
    }).compile();

    userController = moduleFixture.get<UserController>(UserController);
    createUserUseCase = moduleFixture.get<CreateUserUseCase>(CreateUserUseCase);

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('Should be define UserController and CreateUserUseCase', async () => {
    expect(userController).toBeDefined;
    expect(createUserUseCase).toBeDefined;
  });

  it('Should be able create user if all attributes is sending', async () => {
    const body: UserCreateDto = {
      name: 'Fulano da Silva',
      email: 'fulano2@email.com',
      password: 'senha123',
    };

    const result = await userController.create(body);

    expect(result).toEqual(createdUserMock);
  });
});
