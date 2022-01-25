import { Router } from 'express';
import { makeCreateProductController } from '../factories/create';
import { adaptRoutes } from '../../../shared/http/adapters/express-adapter';
import { makeIndexProductController } from '../factories';
import { makeShowProductController } from '../factories/show';
import { makeUpdateProductController } from '../factories/update';
import { makeDeleteProductController } from '../factories/delete';

const productsRoutes = Router();

productsRoutes.get('/', adaptRoutes(makeIndexProductController()));
productsRoutes.get('/:id', adaptRoutes(makeShowProductController()));
productsRoutes.post('/', adaptRoutes(makeCreateProductController()));
productsRoutes.patch('/:id', adaptRoutes(makeUpdateProductController()));
productsRoutes.delete('/:id', adaptRoutes(makeDeleteProductController()));

export { productsRoutes };
