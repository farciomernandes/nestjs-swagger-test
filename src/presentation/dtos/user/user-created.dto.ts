import { ApiProperty, IntersectionType, OmitType } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { CreatedDto } from '../../../shared/dtos/base/created.dto';
import { UserCreateDto } from './user-create.dto';

export class UserCreatedDto extends OmitType(
  IntersectionType(UserCreateDto, CreatedDto),
  ['password'] as const,
) {
  @Expose()
  @ApiProperty({
    type: String,
    example: 'be286530-872a-4342-9ffa-eaf67c0085fe',
    description: 'User id',
    required: false,
  })
  id: string;
}
