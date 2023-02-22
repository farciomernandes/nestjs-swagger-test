import { User } from '../../../../core/domain/entities/user.entity';
import { baseSchema } from '../../../../infra/db/type-orm/schemas/base/base.schema';
import { EntitySchema } from 'typeorm/entity-schema/EntitySchema'; //Vem da lib

export const UserSchema = new EntitySchema<User>({
  schema: 'users',
  name: User.name,
  target: User,
  tableName: 'users',
  columns: {
    ...baseSchema,
    name: {
      type: 'varchar',
      nullable: false,
    },
    email: {
      type: 'varchar',
      nullable: false,
      unique: true,
    },
    password: {
      type: 'varchar',
      nullable: false,
    },
  },
  relations: {},
});
