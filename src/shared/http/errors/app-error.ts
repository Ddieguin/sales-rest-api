import { IappError } from './http-error';

export class AppError extends Error implements IappError {
    public statusCode: number;
    constructor(message: string, statusCode = 400) {
        super(message);
        this.statusCode = statusCode;
    }
}
