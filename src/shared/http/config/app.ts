import express from 'express';
import setMiddleware from './middleware';

const app = express();
setMiddleware(app);

export default app;
