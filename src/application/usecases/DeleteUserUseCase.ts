import { inject, injectable } from 'tsyringe';
import { UserRepository } from '../../domain/repositories/UserRepository';

@injectable()
class DeleteUserUserCase {
  constructor(@inject("UserRepositoryImpl") private userRepository: UserRepository) {}

  async execute(id: string) {
    const user = await this.userRepository.deleteUser(id);
    return user;
  }
}

export { DeleteUserUserCase };
