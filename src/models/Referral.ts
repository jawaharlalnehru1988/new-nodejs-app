import mongoose, { Schema, Document } from 'mongoose';

export interface IReferral extends Document {
    patientInfo: {
        name: string;
        age?: number;
        gender?: string;
        contact?: string;
    },
    gpId: mongoose.Types.ObjectId;
    specialistId: mongoose.Types.ObjectId;
    medicalHistory?: string;
    symptoms?: string;
    testResults?: string;
    status: 'Sent' | 'Accepted' | 'Scheduled' | 'Completed' | 'Rejected';
}

const referralSchema:Schema = new Schema({
    patientInfo: {
      name: { type: String, required: true },
      age: Number,
      gender: String,
      contact: String
    },
    gpId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    specialistId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    medicalHistory: String,
    symptoms: String,
    testResults: String,
    status: {
      type: String,
      enum: ['Sent', 'Accepted', 'Scheduled', 'Completed', 'Rejected'],
      default: 'Sent'
    }
  }, { timestamps: true });
  
  export default mongoose.model<IReferral>('Referral', referralSchema);
  