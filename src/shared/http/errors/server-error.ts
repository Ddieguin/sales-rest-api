import { IappError } from './http-error';

export class ServerError extends Error implements IappError {
    constructor(reason: string) {
        super('Server error: ' + reason + '.');
        this.name = 'ServerError';
    }
}
