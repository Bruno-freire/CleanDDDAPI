import { inject, injectable } from 'tsyringe';
import { UserRepository } from '../../domain/repositories/UserRepository';

@injectable()
class GetUsersUseCase {
  constructor(@inject("UserRepositoryImpl") private userRepository: UserRepository) {}

  async execute() {
    const users = await this.userRepository.getUsers();
    return users;
  }
}

export { GetUsersUseCase };
