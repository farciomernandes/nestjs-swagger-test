import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { UserController } from '../../src/presentation/user.controller';
import { UserCreateDto } from '../../src/presentation/dtos/user/user-create.dto';
import { CreateUserUseCase } from '../../src/core/application/user/create-user-use.case';
import { FindAllUserUseCase } from '../../src/core/application/user/find-all-user-use.case';

const createdUserMock = {
  name: 'Fulano da Silva',
  email: 'fulano2@email.com',
  password: 'senha123',
};

const findAllUsersMock = [
  {
    name: 'Fulano da Silva',
    email: 'fulano@email.com',
    password: 'senha123',
  },
  {
    name: 'Fulano da Silva',
    email: 'fulano2@email.com',
    password: 'senha123',
  },
  {
    name: 'Fulano da Silva',
    email: 'fulano3@email.com',
    password: 'senha123',
  },
  {
    name: 'Fulano da Silva',
    email: 'fulano4@email.com',
    password: 'senha123',
  },
  {
    name: 'Fulano da Silva',
    email: 'fulano5@email.com',
    password: 'senha123',
  },
];

describe('UserController', () => {
  let app: INestApplication;
  let userController: UserController;

  let createUserUseCase: CreateUserUseCase;
  let findAllUserUseCase: FindAllUserUseCase;

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
        {
          provide: FindAllUserUseCase,
          useValue: {
            execute: jest.fn().mockResolvedValue(findAllUsersMock),
          },
        },
      ],
    }).compile();

    userController = moduleFixture.get<UserController>(UserController);
    createUserUseCase = moduleFixture.get<CreateUserUseCase>(CreateUserUseCase);
    findAllUserUseCase =
      moduleFixture.get<FindAllUserUseCase>(FindAllUserUseCase);

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('Should be define UserController and UseCases', async () => {
    expect(userController).toBeDefined;
    expect(createUserUseCase).toBeDefined;
    expect(findAllUserUseCase).toBeDefined;
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

  it('Should be able list all users to database', async () => {
    const result = await userController.findAll();
    expect(result).toEqual(findAllUsersMock);
  });
});
