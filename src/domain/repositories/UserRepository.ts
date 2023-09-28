import { User } from '../entities/User';

interface UserRepository {
  createUser(name: string, email: string): Promise<User>;
  updateUserProfile(id: string, name: string, email: string): Promise<User>;
  getUsers(): Promise<User[]>;
  deleteUser(id: string): Promise<User>;
}

export type { UserRepository };
