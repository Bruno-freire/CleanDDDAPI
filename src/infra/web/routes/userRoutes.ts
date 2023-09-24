import express from 'express';
import { UserController } from '../controllers/UserController';
import { CreateUserUseCase } from '../../../application/useCases/CreateUserUseCase';
import { UpdateUserProfileUseCase } from '../../../application/useCases/UpdateUserProfileUseCase';
import { UserRepositoryImpl } from '../../persistence/UserRepositoryImpl';

const userRouter = express.Router();

const userRepository = new UserRepositoryImpl();
const userController = new UserController(new CreateUserUseCase(userRepository), new UpdateUserProfileUseCase(userRepository));

userRouter.post('/users', (req, res) => userController.createUser(req, res));
userRouter.put('/users/:userId', (req, res) => userController.updateUserProfile(req, res));

export { userRouter };
