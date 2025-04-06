import { Request, Response } from "express";
import {
    postAppointment,
    getAppointmentsByUserId,
    getAppointmentById,
    updateAppointment,
    deleteAppointment,
    getAppointmentsByReferralId
} from "../services/appointmentService";

export const createAppointment = async (req: Request, res: Response) => {
    try {
        const result = await postAppointment(req.body);
        if (result.success) {
            res.status(201).json(result.data);
        } else {
            res.status(400).json({ error: result.error });
        }
    } catch (error) {
        console.error("Error in createAppointment:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};

export const fetchAppointmentsByUserId = async (req: Request, res: Response) => {
    try {
        const userId = req.params.userId;
        const result = await getAppointmentsByUserId(userId);
        if (result.success) {
            res.status(200).json(result.data);
        } else {
            res.status(400).json({ error: result.error });
        }
    } catch (error) {
        console.error("Error in fetchAppointmentsByUserId:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};

export const fetchAppointmentById = async (req: Request, res: Response) => {
    try {
        const appointmentId = req.params.appointmentId;
        const result = await getAppointmentById(appointmentId);
        if (result.success) {
            res.status(200).json(result.data);
        } else {
            res.status(400).json({ error: result.error });
        }
    } catch (error) {
        console.error("Error in fetchAppointmentById:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};

export const modifyAppointment = async (req: Request, res: Response) => {
    try {
        const appointmentId = req.params.appointmentId;
        const result = await updateAppointment(appointmentId, req.body);
        if (result.success) {
            res.status(200).json(result.data);
        } else {
            res.status(400).json({ error: result.error });
        }
    } catch (error) {
        console.error("Error in modifyAppointment:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};

export const removeAppointment = async (req: Request, res: Response) => {
    try {
        const appointmentId = req.params.appointmentId;
        const result = await deleteAppointment(appointmentId);
        if (result.success) {
            res.status(200).json(result.data);
        } else {
            res.status(400).json({ error: result.error });
        }
    } catch (error) {
        console.error("Error in removeAppointment:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};

export const fetchAppointmentsByReferralId = async (req: Request, res: Response) => {
    try {
        const referralId = req.params.referralId;
        const result = await getAppointmentsByReferralId(referralId);
        if (result.success) {
            res.status(200).json(result.data);
        } else {
            res.status(400).json({ error: result.error });
        }
    } catch (error) {
        console.error("Error in fetchAppointmentsByReferralId:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};
