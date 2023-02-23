import { plainToClass } from 'class-transformer';
import { MapTo } from 'src/core/base/mappers/map-to';
import { UserCreatedDto } from '../../../../presentation/dtos/user/user-created.dto';
import { User } from '../../entities/user.entity';

export class UserCreatedMapper implements MapTo<User, UserCreatedDto> {
  public mapTo(data: User): UserCreatedDto {
    delete data.password;
    return plainToClass(UserCreatedDto, data, {
      excludeExtraneousValues: true,
    });
  }
}
