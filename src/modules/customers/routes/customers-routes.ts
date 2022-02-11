import { Router } from 'express';
import { uuidValidation } from '../../../shared/controller/validations/uuid-validation';
import { adaptRoutes } from '../../../shared/http/adapters/express-adapter';
import { isAuthenticated } from '../../users/routes/middlewares/auth-middleware';
import { makeCreateCustomersController } from '../factories/create-customers';
import { makeDeleteCustomersController } from '../factories/delete-customers';
import { makeShowCustomersController } from '../factories/show-customers';
import { makeUpdateCustomersController } from '../factories/update-customers';

const customersRoutes = Router();

customersRoutes.use(isAuthenticated());

customersRoutes.get(
    '/:id',
    uuidValidation(),
    adaptRoutes(makeShowCustomersController()),
);
customersRoutes.delete(
    '/:id',
    uuidValidation(),
    adaptRoutes(makeDeleteCustomersController()),
);
customersRoutes.patch(
    '/:id',
    uuidValidation(),
    adaptRoutes(makeUpdateCustomersController()),
);
customersRoutes.post('/', adaptRoutes(makeCreateCustomersController()));

export { customersRoutes };
