import { container } from "tsyringe";
import { CreateUserUseCase } from "../../application/usecases/CreateUserUseCase";
import { UserRepository } from "../../domain/repositories/UserRepository";
import { UserRepositoryImpl } from "../../infra/persistence/UserRepositoryImpl";
import { UpdateUserProfileUseCase } from "../../application/usecases/UpdateUserProfileUseCase";
import { GetUsersUseCase } from "../../application/usecases/GetUsersUseCase";
import { DeleteUserUserCase } from "../../application/usecases/DeleteUserUseCase";


// Registre suas dependências no contêiner
container.registerSingleton<UserRepository>('UserRepositoryImpl', UserRepositoryImpl);

container.registerSingleton<CreateUserUseCase>('CreateUserUseCase', CreateUserUseCase);

container.registerSingleton<UpdateUserProfileUseCase>('UpdateUserProfileUseCase', UpdateUserProfileUseCase);

container.registerSingleton<GetUsersUseCase>('GetUsersUseCase', GetUsersUseCase)

container.registerSingleton<DeleteUserUserCase>('DeleteUserUseCase', DeleteUserUserCase)