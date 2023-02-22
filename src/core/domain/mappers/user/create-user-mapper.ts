import { plainToClass } from 'class-transformer';
import { MapFrom } from 'src/core/base/mappers/map-from';
import { MapTo } from 'src/core/base/mappers/map-to';
import { UserCreateDto } from 'src/presentation/dtos/user/user-create.dto';
import { UserCreatedDto } from 'src/presentation/dtos/user/user-created.dto';
import { User } from '../../entities/user.entity';

export class CreateUserMapper
  implements MapFrom<UserCreateDto, User>, MapTo<User, UserCreatedDto>
{
  public mapFrom({ email, name, password }: UserCreateDto): User {
    const user = new User();
    user.name = name;
    user.email = email;
    user.password = password;
    return user;
  }
  public mapTo(data: User): UserCreatedDto {
    return plainToClass(UserCreatedDto, data, {
      excludeExtraneousValues: true,
    });
  }
}
