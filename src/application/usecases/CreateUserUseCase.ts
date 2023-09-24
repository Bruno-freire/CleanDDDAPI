import { UserRepository } from '../../domain/repositories/UserRepository';

class CreateUserUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute(name: string, email: string) {
    const user = await this.userRepository.createUser(name, email);
    return user;
  }
}

export { CreateUserUseCase };
