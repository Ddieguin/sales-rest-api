import { IhttpRequest, IhttpResponse } from '../http/ports/http';

type handleMini = () => Promise<IhttpResponse>;
type handleFull = ({ body }: IhttpRequest) => Promise<IhttpResponse>;
type handleBoth = handleMini | handleFull;
export interface IcontrollerBase {
    handle: handleBoth;
}
