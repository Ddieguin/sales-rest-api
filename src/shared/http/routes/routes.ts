import { Router } from 'express';
import { customersRoutes } from '../../../modules/customers/routes/customers-routes';
import { orderRoutes } from '../../../modules/orders/routes/order-routes';
import { productsRoutes } from '../../../modules/products/routes/products-routes';
import { passwordRouter } from '../../../modules/users/routes/password-routes';
import { sessionsRoutes } from '../../../modules/users/routes/sessions-routes';
import { usersRoutes } from '../../../modules/users/routes/users-routes';

const routes = Router();

routes.use('/products', productsRoutes);
routes.use('/users', usersRoutes);
routes.use('/sessions', sessionsRoutes);
routes.use('/reset_password', passwordRouter);
routes.use('/customers', customersRoutes);
routes.use('/orders', orderRoutes);

export { routes };
