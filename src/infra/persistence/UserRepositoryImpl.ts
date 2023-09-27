import { UserRepository } from '../../domain/repositories/UserRepository';
import { User } from '../../domain/entities/User';
import { injectable } from 'tsyringe';

let accountant = 1
let usersArray: User[] = []

@injectable()
class UserRepositoryImpl implements UserRepository {
  async createUser(name: string, email: string): Promise<User> {
    const user = new User(`${accountant}`, name, email);
    usersArray.push(user)
    accountant++
    return user;
  }

  async getUsers(): Promise<User[]> {
    return usersArray
  }

  async updateUserProfile(userId: string, name: string, email: string): Promise<User> {
    const updatedUser = new User(userId, name, email);
    return updatedUser;
  }

  async deleteUser(id: number): Promise<User[]> {
    usersArray = usersArray.filter(data => data.id !== id)
    return usersArray
  }
}

export { UserRepositoryImpl };
