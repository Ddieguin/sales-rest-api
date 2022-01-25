import { Express } from 'express';
import { productsRoutes } from '../../../modules/products/routes/products-routes';

export default (app: Express): void => {
    app.use('/api/products', productsRoutes);
};
