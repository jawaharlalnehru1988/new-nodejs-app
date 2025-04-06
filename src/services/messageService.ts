import Message from '../models/Message';

export const postMessage = async (senderId: string, receiverId: string, content: string) => {
    try {
        const message = new Message({
            senderId,
            receiverId,
            content,
        });
        await message.save();
        return message;
    } catch (error) {
        if (error instanceof Error) {
            throw new Error(`Failed to post message: ${error.message}`);
        }
        throw new Error('Failed to post message: An unknown error occurred');
    }
};

export const getMessagesByUserId = async (userId: string) => {
    try {
        const messages = await Message.find({
            $or: [{ senderId: userId }, { receiverId: userId }],
        }).populate('senderId', 'name email').populate('receiverId', 'name email').exec();
        return messages;
    } catch (error) {
        if (error instanceof Error) {
            throw new Error(`Failed to fetch messages: ${error.message}`);
        }
        throw new Error('Failed to fetch messages: An unknown error occurred');
    }
}

export const getMessageById = async (messageId: string) => {
    try {
        const message = await Message.findById(messageId).populate('senderId', 'name email').populate('receiverId', 'name email').exec();
        if (!message) {
            throw new Error('Message not found');
        }
        return message;

    } catch (error) {
        if (error instanceof Error) {
            throw new Error(`Failed to fetch message: ${error.message}`);
        }
        throw new Error('Failed to fetch message: An unknown error occurred');
    }
}

