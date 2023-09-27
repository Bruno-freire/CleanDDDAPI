import { Request, Response } from 'express';
import { CreateUserUseCase } from '../../../application/usecases/CreateUserUseCase';
import { UpdateUserProfileUseCase } from '../../../application/usecases/UpdateUserProfileUseCase';
import { CreateUserDTO } from '../../../presentation/dtos/CreateUserDTO';
import { UpdateUserProfileDTO } from '../../../presentation/dtos/UpdateUserProfileDTO';
import { inject, injectable } from 'tsyringe';
import { User } from '../../../domain/entities/User';


let userArray: User[] = []
@injectable()
class UserController {
  constructor(
    @inject("CreateUserUseCase") private createUserUseCase: CreateUserUseCase,
    @inject("UpdateUserProfileUseCase") private updateUserProfileUseCase: UpdateUserProfileUseCase
  ) {}

  async createUser(req: Request, res: Response) {
    const { name, email } = req.body as CreateUserDTO;
    const user = await this.createUserUseCase.execute(name, email);
    userArray.push(user)
    return res.json(user);
  }

  async getUsers(req: Request, res: Response) {
    return res.json(userArray);
  }

  async updateUserProfile(req: Request, res: Response) {
    const { id } = req.params;
    const { name, email } = req.body as UpdateUserProfileDTO;
    const updatedUser = await this.updateUserProfileUseCase.execute(id, name, email);
    userArray = userArray.map(data => {
      if (data.id === id) {
        data.name = name;
        data.email = email;
        return data;
      }
      return data;
    });
    console.log(userArray)
    return res.json(updatedUser);
  }
}

export { UserController };
