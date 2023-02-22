import { BaseEntity } from '../../../core/base/entities/base.entity';

export class User extends BaseEntity {
  public name: string;
  public email: string;
  public password: string;
}
