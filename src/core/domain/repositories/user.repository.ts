import { User } from '../entities/user.entity';

export interface UserRepository {
  save(user: User): Promise<User>;
  findAll(conditions?: any, options?: (keyof User)[]): Promise<User[]>;
  findByEmail(email: string, relations?: string[]): Promise<User>;
}
