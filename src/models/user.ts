import mongoose, {Schema, Document} from 'mongoose';

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  provider: 'GP' | 'Specialist';
  specialization?: string; // only for Specialist
  contactInfo?: {
    phone?: string;
    address?: string;
  };
}

const userSchema:Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  provider: { type: String, enum: ['GP', 'Specialist'], required: true },
  specialization: { type: String }, // only for Specialist
  contactInfo: {
    phone: { type: String },
    address: { type: String }
  }
}, { timestamps: true });

export default mongoose.model<IUser>('User', userSchema);
