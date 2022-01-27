import { Router } from 'express';
import { productsRoutes } from '../../../modules/products/routes/products-routes';
import { sessionsRoutes } from '../../../modules/users/controllers/auth/routes/sessions-routes';
import { usersRoutes } from '../../../modules/users/routes/users-routes';

const routes = Router();

routes.use('/products', productsRoutes);
routes.use('/users', usersRoutes);
routes.use('/sessions', sessionsRoutes);

export { routes };
