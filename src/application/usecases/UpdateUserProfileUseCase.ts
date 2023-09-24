import { UserRepository } from '../../domain/repositories/UserRepository';

class UpdateUserProfileUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute(userId: string, name: string, email: string) {
    const updatedUser = await this.userRepository.updateUserProfile(userId, name, email);
    return updatedUser;
  }
}

export { UpdateUserProfileUseCase };
