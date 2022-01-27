import { IappError } from './http-error';
import { Request, Response, NextFunction } from 'express';

export class AppError extends Error implements IappError {
    public statusCode: number;
    constructor(message: string, statusCode = 400) {
        super(message);
        this.statusCode = statusCode;
    }
}

export const appError = (
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    if (err instanceof AppError) {
        return res.status(err.statusCode).json({
            status: 'error',
            message: err.message,
        });
    }
    console.log(err);
    return res.status(500).json({
        status: 'error',
        message: 'Internal server error',
    });
};
