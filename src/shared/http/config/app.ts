import express from 'express';
import setMiddleware from './middleware';
import setRoutes from '../routes/index';

const app = express();
setMiddleware(app);
setRoutes(app);

export default app;
