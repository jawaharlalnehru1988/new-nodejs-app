import express from 'express';
import verifyToken from '../utils/verifyToken';
import { createAppointment, fetchAppointmentsByUserId, fetchAppointmentById } from '../controllers/appointmentController';

const appointmentRouter = express.Router();

appointmentRouter.post('/appointments', verifyToken, createAppointment);
appointmentRouter.get('/appointments/user/:userId', verifyToken, fetchAppointmentsByUserId);
appointmentRouter.get('/appointments/:appointmentId', verifyToken, fetchAppointmentById);

export default appointmentRouter;