import express from 'express';
import setMiddleware from './middleware';
import setRoutes from '../routes/index';
import setExpressAsyncErrors from '../errors/index';

const app = express();
setMiddleware(app);
setRoutes(app);
setExpressAsyncErrors(app);

export default app;
