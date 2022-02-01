export interface IhttpResponse {
    statusCode: number;
    body: any;
}

export interface IhttpRequest {
    body?: any;
    user_id?: any;
    file?: any;
    params?: any;
    query?: any;
}
