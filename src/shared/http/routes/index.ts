import express from 'express';
import 'express-async-errors';
import { routes } from './routes';
import uploadConfig from '../../../config/upload';

export default (app: express.Express): void => {
    app.use('/api', routes);
    app.use('/files', express.static(uploadConfig.directory));
};
