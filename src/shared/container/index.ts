import { container } from "tsyringe";
import { CreateUserUseCase } from "../../application/usecases/CreateUserUseCase";
import { UserRepository } from "../../domain/repositories/UserRepository";
import { UserRepositoryImpl } from "../../infra/persistence/UserRepositoryImpl";
import { UpdateUserProfileUseCase } from "../../application/usecases/UpdateUserProfileUseCase";


// Registre suas dependências no contêiner
container.registerSingleton<UserRepository>('UserRepositoryImpl', UserRepositoryImpl);

container.registerSingleton<CreateUserUseCase>('CreateUserUseCase', CreateUserUseCase);

container.registerSingleton<UpdateUserProfileUseCase>('UpdateUserProfileUseCase', UpdateUserProfileUseCase);
