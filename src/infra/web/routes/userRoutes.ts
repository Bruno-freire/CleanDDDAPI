import express from 'express';
import { container } from 'tsyringe';
import { UserController } from '../controllers/UserController';

const userRouter = express.Router();

const userController = container.resolve(UserController)

userRouter.get('/users', (req, res) => userController.getUsers(req, res));
userRouter.post('/users', (req, res) => userController.createUser(req, res));
userRouter.put('/users/:id', (req, res) => userController.updateUserProfile(req, res));

export { userRouter };
