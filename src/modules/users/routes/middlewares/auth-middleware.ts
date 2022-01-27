import { NextFunction, Request, Response } from 'express';
import { AppError } from '../../../../shared/http/errors/app-error';
import { verify } from 'jsonwebtoken';

interface ItokenPayload {
    id: string;
    iat: number;
    exp: number;
}

export const isAuthenticated = () => {
    return (req: Request, res: Response, next: NextFunction) => {
        const { authorization } = req.headers;

        if (!authorization) {
            throw new AppError(`JWT token is missing`);
        }

        const [, token] = authorization.split(' ');

        try {
            const user = verify(token, process.env.JWT_SECRET);
            const { id } = user as ItokenPayload;
            req.user_id = id;
            return next();
        } catch (err) {
            throw new AppError(`Invalid JWT token`);
        }
    };
};
