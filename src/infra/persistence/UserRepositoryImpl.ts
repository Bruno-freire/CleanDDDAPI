import { UserRepository } from '../../domain/repositories/UserRepository';
import { User } from '../../domain/entities/User';

class UserRepositoryImpl implements UserRepository {
  async createUser(name: string, email: string): Promise<User> {
    const user = new User('1', name, email);
    return user;
  }

  async updateUserProfile(userId: string, name: string, email: string): Promise<User> {
    const updatedUser = new User(userId, name, email);
    return updatedUser;
  }
}

export { UserRepositoryImpl };
