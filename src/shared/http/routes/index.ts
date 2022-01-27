import { Express } from 'express';
import 'express-async-errors';
import { routes } from './routes';

export default (app: Express): void => {
    app.use('/api', routes);
};
