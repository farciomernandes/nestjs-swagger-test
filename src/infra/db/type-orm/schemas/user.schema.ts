import { User } from 'src/core/domain/entities/user.entity';
import { baseSchema } from 'src/infra/db/type-orm/schemas/base/base.schema';
import { EntitySchema } from 'typeorm/entity-schema/EntitySchema'; //Vem da lib

export const UserSchema = new EntitySchema<User>({
  schema: 'public',
  name: User.name,
  tableName: 'users',
  columns: {
    ...baseSchema,
    name: {
      type: 'varchar',
      nullable: false,
    },
    email: {
      type: 'varchar',
      unique: true,
      nullable: false,
    },
    password: {
      type: 'varchar',
      nullable: false,
    },
  },
});
