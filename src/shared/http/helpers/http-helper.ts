import { IhttpResponse } from '../ports/http';
import { ServerError } from '../errors/server-error';

export const created = (data: any): IhttpResponse => ({
    status: 201,
    body: data,
});

export const badRequest = (err: Error): IhttpResponse => ({
    status: 400,
    body: err.message,
});

export const ok = (data: any): IhttpResponse => ({
    status: 200,
    body: data,
});

export const unauthorized = (err: Error): IhttpResponse => ({
    status: 401,
    body: err.message,
});

export const serverError = (reason: string): IhttpResponse => ({
    status: 500,
    body: new ServerError(reason),
});
