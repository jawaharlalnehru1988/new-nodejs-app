import express from 'express';
import verifyToken from '../utils/verifyToken';
import { createReferral, fetchReferralsByUserId, fetchReferralById } from '../controllers/refferalController';

const referralRouter = express.Router();

referralRouter.post('/referrals', verifyToken, createReferral);
referralRouter.get('/referrals/user/:userId', verifyToken, fetchReferralsByUserId);
referralRouter.get('/referrals/:referralId', verifyToken, fetchReferralById);   

export default referralRouter;