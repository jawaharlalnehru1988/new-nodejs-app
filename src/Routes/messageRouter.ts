import express from 'express';
import verifyToken from '../utils/verifyToken';
import { createMessage, fetchMessagesByUserId, fetchMessageById } from '../controllers/messageController';

const messageRouter = express.Router();

messageRouter.post('/messages', verifyToken, createMessage);
messageRouter.get('/messages/user/:userId', verifyToken, fetchMessagesByUserId);
messageRouter.get('/messages/:messageId', verifyToken, fetchMessageById);

export default messageRouter;



