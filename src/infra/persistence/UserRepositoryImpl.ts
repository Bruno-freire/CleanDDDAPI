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

  async updateUserProfile(id: string, name: string, email: string): Promise<User> {
    let user: User
    usersArray = usersArray.map(data => {
      if (data.id === id) {
        data.name = name;
        data.email = email;
        user = data
        return data;
      }
      return data;
    });
    return user;
  }

  async deleteUser(id: string): Promise<User> {
    usersArray = usersArray.filter(data => data.id !== id)
    return 
  }
}

export { UserRepositoryImpl };
