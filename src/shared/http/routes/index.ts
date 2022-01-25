import { Express } from 'express';
import 'express-async-errors';
import { productsRoutes } from '../../../modules/products/routes/products-routes';

export default (app: Express): void => {
    app.use('/api/products', productsRoutes);
};
