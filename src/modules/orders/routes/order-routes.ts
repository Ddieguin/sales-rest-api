import { Router } from 'express';
import { adaptRoutes } from '../../../shared/http/adapters/express-adapter';
import { makeCreateOrderController } from '../factories/create';
import { makeShowOrderController } from '../factories/show';
import { makeIndexOrderController } from '../factories/index';

const orderRoutes = Router();

orderRoutes.post('/', adaptRoutes(makeCreateOrderController()));
orderRoutes.get('/:id', adaptRoutes(makeShowOrderController()));
orderRoutes.get('/', adaptRoutes(makeIndexOrderController()));

export { orderRoutes };
