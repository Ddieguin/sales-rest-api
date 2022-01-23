import { Express } from 'express';
import { appError, appCors, bodyParser } from '../middlewares';

export default (app: Express): void => {
    app.use(bodyParser);
    app.use(appError);
    app.use(appCors());
};
