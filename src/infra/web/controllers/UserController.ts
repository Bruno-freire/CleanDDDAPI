import { Request, Response } from 'express';
import { CreateUserUseCase } from '../../../application/usecases/CreateUserUseCase';
import { UpdateUserProfileUseCase } from '../../../application/usecases/UpdateUserProfileUseCase';
import { CreateUserDTO } from '../../../presentation/dtos/CreateUserDTO';
import { UpdateUserProfileDTO } from '../../../presentation/dtos/UpdateUserProfileDTO';
import { inject, injectable } from 'tsyringe';
import { GetUsersUseCase } from '../../../application/usecases/GetUsersUseCase';
import { DeleteUserUserCase } from '../../../application/usecases/DeleteUserUseCase';

@injectable()
class UserController {
  constructor(
    @inject("CreateUserUseCase") private createUserUseCase: CreateUserUseCase,
    @inject("UpdateUserProfileUseCase") private updateUserProfileUseCase: UpdateUserProfileUseCase,
    @inject("GetUsersUseCase") private getUsersUseCase: GetUsersUseCase,
    @inject('DeleteUserUseCase') private deleteUserUseCase: DeleteUserUserCase
  ) {}

  async createUser(req: Request, res: Response) {
    const { name, email } = req.body as CreateUserDTO;
    const user = await this.createUserUseCase.execute(name, email);
    return res.json(user);
  }

  async getUsers(req: Request, res: Response) {
    const users = await this.getUsersUseCase.execute()
    return res.json(users);
  }

  async updateUserProfile(req: Request, res: Response) {
    const { id } = req.params;
    const { name, email } = req.body as UpdateUserProfileDTO;
    const updatedUser = await this.updateUserProfileUseCase.execute(id, name, email);
    return res.json(updatedUser);
  }

  async deleteUser(req: Request, res: Response) {
    const { id } = req.params
    const user = await this.deleteUserUseCase.execute(id)
    return res.json(user)
  }
}

export { UserController };
