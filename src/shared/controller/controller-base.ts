import { IhttpRequest, IhttpResponse } from '../http/ports/http';

export interface IcontrollerBase {
    handle: ({ body }: IhttpRequest) => IhttpResponse;
}
