import { User } from '../entities/User';

interface UserRepository {
  createUser(name: string, email: string): Promise<User>;
  updateUserProfile(userId: string, name: string, email: string): Promise<User>;
}

export type { UserRepository };
