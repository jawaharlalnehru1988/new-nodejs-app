import Appointment, { IAppointment } from "../models/Appointment";

export const postAppointment = async (appointmentData: IAppointment) => {
    try {
        const newAppointment = await Appointment.create(appointmentData);
        return { success: true, data: newAppointment };
    } catch (error) {
        console.error('Error creating appointment:', error);
        return { success: false, error: 'Failed to create appointment' };
    }
};

export const getAppointmentsByUserId = async (userId: string) => {
    try {
        const appointments = await Appointment.find({ doctorId: userId }).populate('referralId', 'patientId').exec();
        return { success: true, data: appointments };
    } catch (error) {
        console.error('Error fetching appointments:', error);
        return { success: false, error: 'Failed to fetch appointments' };
    }
}

export const getAppointmentById = async (appointmentId: string) => {
    try {
        const appointment = await Appointment.findById(appointmentId).populate('referralId', 'patientId').exec();
        return { success: true, data: appointment };
    } catch (error) {
        console.error('Error fetching appointment:', error);
        return { success: false, error: 'Failed to fetch appointment' };
    }
};

export const updateAppointment = async (appointmentId: string, appointmentData: Partial<IAppointment>) => {
    try {
        const updatedAppointment = await Appointment.findByIdAndUpdate(appointmentId, appointmentData, { new: true }).exec();
        return { success: true, data: updatedAppointment };
    } catch (error) {
        console.error('Error updating appointment:', error);
        return { success: false, error: 'Failed to update appointment' };
    }
};

export const deleteAppointment = async (appointmentId: string) => {
    try {
        const deletedAppointment = await Appointment.findByIdAndDelete(appointmentId).exec();
        return { success: true, data: deletedAppointment };
    } catch (error) {
        console.error('Error deleting appointment:', error);
        return { success: false, error: 'Failed to delete appointment' };
    }
};

export const getAppointmentsByReferralId = async (referralId: string) => {
    try {
        const appointments = await Appointment.find({ referralId }).populate('doctorId', 'name email').exec();
        return { success: true, data: appointments };
    } catch (error) {
        console.error('Error fetching appointments:', error);
        return { success: false, error: 'Failed to fetch appointments' };
    }
}

