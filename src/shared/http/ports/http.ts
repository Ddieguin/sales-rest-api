export interface IhttpResponse {
    statusCode: number;
    body: any;
}

export interface IhttpRequest {
    body?: any;
    params?: any;
    query?: any;
}
