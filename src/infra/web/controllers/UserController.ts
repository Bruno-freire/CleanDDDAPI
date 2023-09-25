import { Request, Response } from 'express';
import { CreateUserUseCase } from '../../../application/useCases/CreateUserUseCase';
import { UpdateUserProfileUseCase } from '../../../application/useCases/UpdateUserProfileUseCase';
import { CreateUserDTO } from '../../../presentation/dtos/CreateUserDTO';
import { UpdateUserProfileDTO } from '../../../presentation/dtos/UpdateUserProfileDTO';

class UserController {
  constructor(
    private createUserUseCase: CreateUserUseCase,
    private updateUserProfileUseCase: UpdateUserProfileUseCase
  ) {}

  async createUser(req: Request, res: Response) {
    const {  } = req.body as CreateUserDTO;
    const user = await this.createUserUseCase.execute(name, email);
    return res.json(user);
  }

  async updateUserProfile(req: Request, res: Response) {
    const { userId } = req.params;
    const { name, email } = req.body as UpdateUserProfileDTO;
    const updatedUser = await this.updateUserProfileUseCase.execute(userId, name, email);
    return res.json(updatedUser);
  }
}

export { UserController };
