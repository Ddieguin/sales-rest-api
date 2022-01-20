import { IhttpRequest, IhttpResponse } from '../../shared/http/ports/http';

export interface IcontrollerBase {
    handle: (req: IhttpRequest) => Promise<IhttpResponse>;
}
