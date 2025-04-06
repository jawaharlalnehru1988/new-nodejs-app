import mongoose, {Schema, Document} from 'mongoose';

export interface IUser extends Document {
  name: string;
  email: string;
  passwordHash: string;
  role: 'GP' | 'Specialist';
  specialization?: string; // only for Specialist
  contactInfo?: {
    phone?: string;
    address?: string;
  };
}

const userSchema:Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  passwordHash: { type: String, required: true },
  role: { type: String, enum: ['GP', 'Specialist'], required: true },
  specialization: { type: String }, // only for Specialist
  contactInfo: {
    phone: { type: String },
    address: { type: String }
  }
}, { timestamps: true });

export default mongoose.model<IUser>('User', userSchema);
