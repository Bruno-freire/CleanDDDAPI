import { UserRepository } from '../../domain/repositories/UserRepository';
import { User } from '../../domain/entities/User';
import { injectable } from 'tsyringe';

let accountant = 1

@injectable()
class UserRepositoryImpl implements UserRepository {
  async createUser(name: string, email: string): Promise<User> {
    const user = new User(`${accountant}`, name, email);
    accountant++
    return user;
  }

  async updateUserProfile(userId: string, name: string, email: string): Promise<User> {
    const updatedUser = new User(userId, name, email);
    return updatedUser;
  }
}

export { UserRepositoryImpl };
