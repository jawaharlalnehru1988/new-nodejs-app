import { Router } from 'express';
import { createUser, deleteUser, findUserByEmail, findUserByName, getAllUsers, getUserById, updateUser } from '../controllers/userController';

const userRouter = Router();

userRouter.post('/users', createUser);
userRouter.get('/users/:id', getUserById);
userRouter.get('/users', getAllUsers);
userRouter.put('/users/:id', updateUser);
userRouter.delete('/users/:id', deleteUser);
userRouter.get('/users/email', findUserByEmail);
userRouter.get('/users/name', findUserByName);

export default userRouter;
