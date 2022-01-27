import { Router } from 'express';
import { adaptRoutes } from '../../../shared/http/adapters/express-adapter';
import { makeIndexUserController } from '../factories';
import { makeCreateUserController } from '../factories/create';
import { isAuthenticated } from './middlewares/auth-middleware';
import { bodyCreateUserValidation } from './middlewares/validations/body-create-user-validation';

const usersRoutes = Router();

usersRoutes.get('/', isAuthenticated(), adaptRoutes(makeIndexUserController()));
usersRoutes.post(
    '/',
    bodyCreateUserValidation(),
    adaptRoutes(makeCreateUserController()),
);

export { usersRoutes };
