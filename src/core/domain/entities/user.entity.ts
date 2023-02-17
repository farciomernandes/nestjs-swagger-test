import { BaseEntity } from 'src/core/base/entities/base.entity';

export class User extends BaseEntity {
  public name: string;
  public password: string;
  public email: string;
}
