import { inject, injectable } from 'tsyringe';
import { UserRepository } from '../../domain/repositories/UserRepository';

@injectable()
class CreateUserUseCase {
  constructor(@inject("UserRepositoryImpl") private userRepository: UserRepository) {}

  async execute(name: string, email: string) {
    const user = await this.userRepository.createUser(name, email);
    return user;
  }
}

export { CreateUserUseCase };
