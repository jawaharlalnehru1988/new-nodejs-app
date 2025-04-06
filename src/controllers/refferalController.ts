import { Request, Response } from "express";
import { postReferral, getRefferalsByUserId, getReferralById } from "../services/referralService";

export const createReferral = async (req: Request, res: Response) => {
    try {
        const result = await postReferral(req.body);
        if (result.success) {
            res.status(201).json(result.data);
        } else {
            res.status(400).json({ error: result.error });
        }
    } catch (error) {
        console.error("Error in createReferral:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};

export const fetchReferralsByUserId = async (req: Request, res: Response) => {
    try {
        const userId = req.params.userId;
        const result = await getRefferalsByUserId(userId);
        if (result.success) {
            res.status(200).json(result.data);
        } else {
            res.status(400).json({ error: result.error });
        }
    } catch (error) {
        console.error("Error in fetchReferralsByUserId:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};

export const fetchReferralById = async (req: Request, res: Response) => {
    try {
        const referralId = req.params.referralId;
        const result = await getReferralById(referralId);
        if (result.success) {
            res.status(200).json(result.data);
        } else {
            res.status(400).json({ error: result.error });
        }
    } catch (error) {
        console.error("Error in fetchReferralById:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};
