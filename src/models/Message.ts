import mongoose, { Schema, Document } from 'mongoose';

interface IMessage extends Document {
    senderId: mongoose.Schema.Types.ObjectId;
    receiverId: mongoose.Schema.Types.ObjectId;
    content: string;
    timestamp: Date;
}


const messageSchema: Schema = new Schema({
    senderId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    receiverId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    content: { type: String, required: true },
    timestamp: { type: Date, default: Date.now }
  });
  
  export default mongoose.model<IMessage>('Message', messageSchema);
  