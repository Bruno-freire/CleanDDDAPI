import { inject, injectable } from 'tsyringe';
import { UserRepository } from '../../domain/repositories/UserRepository';

@injectable()
class UpdateUserProfileUseCase {
  constructor(@inject("UserRepositoryImpl") private userRepository: UserRepository) {}

  async execute(userId: string, name: string, email: string) {
    const updatedUser = await this.userRepository.updateUserProfile(userId, name, email);
    return updatedUser;
  }
}

export { UpdateUserProfileUseCase };
