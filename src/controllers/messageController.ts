import { Request, Response } from 'express';
import { postMessage, getMessagesByUserId, getMessageById } from '../services/messageService';

export const createMessage = async (req: Request, res: Response) => {
    try {
        const { senderId, receiverId, content } = req.body;
        const message = await postMessage(senderId, receiverId, content);
        res.status(201).json(message);
    } catch (error) {
        res.status(500).json({ error: error instanceof Error ? error.message : 'An unknown error occurred' });
    }
};

export const fetchMessagesByUserId = async (req: Request, res: Response) => {
    try {
        const { userId } = req.params;
        const messages = await getMessagesByUserId(userId);
        res.status(200).json(messages);
    } catch (error) {
        res.status(500).json({ error: error instanceof Error ? error.message : 'An unknown error occurred' });
    }
};

export const fetchMessageById = async (req: Request, res: Response) => {
    try {
        const { messageId } = req.params;
        const message = await getMessageById(messageId);
        res.status(200).json(message);
    } catch (error) {
        res.status(500).json({ error: error instanceof Error ? error.message : 'An unknown error occurred' });
    }
};
