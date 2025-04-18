import { Router } from 'express';
import { createUser, deleteUser, findUserByEmail, findUserByName, getAllUsers, getUserById, loginUserController, updateUser } from '../controllers/userController';

const userRouter = Router();

userRouter.post('/create', createUser);
userRouter.post('/login', loginUserController);
userRouter.get('/fetch/:id', getUserById);
userRouter.get('/fetch', getAllUsers);
userRouter.put('/update/:id', updateUser);
userRouter.delete('/delete/:id', deleteUser);
userRouter.get('/fetch/email', findUserByEmail);
userRouter.get('/fetch/name', findUserByName);

export default userRouter;
