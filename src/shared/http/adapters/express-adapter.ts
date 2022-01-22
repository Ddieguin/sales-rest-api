import { Request, Response } from 'express';
import { IcontrollerBase } from '../../controller/controller-base';
import { IhttpRequest } from '../ports/http';

export const adaptRoutes = (controller: IcontrollerBase) => {
    return async (req: Request, res: Response) => {
        const request: IhttpRequest = {
            body: req.body,
        };

        const response = await controller.handle(request);
        return res.status(response.status).json(response.body);
    };
};
