import { BaseEntity } from '../../../core/base/entities/base.entity';

export class User extends BaseEntity {
  public name: string;
  public email: string;
  public password: string;

 /**
  *  constructor(user?: Partial<User>) {
    super();
    this.name = user.name;
    this.email = user.email;
    this.password = user.password;
    this.id = user.id;
    this.createdAt = user.createdAt;
    this.updatedAt = user.updatedAt;
    this.deletedAt = user.deletedAt;
  }
  */
}
