import jwt from 'jsonwebtoken';
import { Environment } from './config';
import { Request, Response, NextFunction } from 'express';

const secretkey = Environment.JWT_SECRET as string;

interface AuthenticatedRequest extends Request {
    user? : string | object;
}

const verifyToken = (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
    const token = req.headers['authorization']?.split(' ')[1]; // Assuming the token is in the format "Bearer <token>"
    if (!token) {
         res.status(401).json({ error: 'No token provided' });
         return;
    }
    try {
        jwt.verify(token, secretkey, (err, decoded) => {
            if (err) {
                 res.status(403).json({ error: 'Failed to authenticate token' });
                 return;
            }
            req.user = decoded; 
            next();
        });        
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
}

export default verifyToken;