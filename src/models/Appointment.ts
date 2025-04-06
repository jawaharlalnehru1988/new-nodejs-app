import mongoose, {Schema} from 'mongoose';

export interface IAppointment extends Document{
    referralId: mongoose.Schema.Types.ObjectId;
    doctorId: mongoose.Schema.Types.ObjectId;
    patientId: string; // can also ref Patient if separate
    date: Date;
    time: string;
    status: 'Pending' | 'Confirmed' | 'Completed' | 'Cancelled';
}

 const appointmentSchema: Schema = new Schema({
    referralId: { type: Schema.Types.ObjectId, ref: 'Referral', required: true },
    doctorId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    patientId: { type: String, required: true }, // can also ref Patient if separate
    date: { type: Date, required: true },
    time: { type: String, required: true },
    status: { type: String, enum: ['Pending', 'Confirmed', 'Completed', 'Cancelled'], default: 'Pending' }
  }, { timestamps: true });
  
  export default mongoose.model<IAppointment>('Appointment', appointmentSchema);

