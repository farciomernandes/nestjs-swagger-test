import { User } from 'src/core/domain/entities/user.entity';
import { UserRepository } from 'src/core/domain/repositories/user.repository';

export class UserInMemoryRepository implements UserRepository {
  items: User[] = [];

  // findByEmail(email: string): Promise<User> {
  //   throw new Error('Method not implemented.');
  // }

  async save(user: User): Promise<User> {
    this.items.push(user);
    return user;
  }

  async findAll(): Promise<User[]> {
    return this.items;
  }
}
