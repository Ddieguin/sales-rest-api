import { Router } from 'express';
import { adaptRoutes } from '../../../shared/http/adapters/express-adapter';
import { makeIndexUserController } from '../factories';
import { makeCreateUserController } from '../factories/create';
import { makeUpdateProfileController } from '../factories/upload';
import { isAuthenticated } from './middlewares/auth-middleware';
import { bodyCreateUserValidation } from './middlewares/validations/body-create-user-validation';
import uploadConfig from '../../../config/upload';
import multer from 'multer';
import { makeUpdateUserController } from '../factories/update-user';
import { makeShowUserController } from '../factories/show-user';
import { uuidValidation } from '../../../shared/controller/validations/uuid-validation';

const usersRoutes = Router();
const upload = multer(uploadConfig);

usersRoutes.get('/', isAuthenticated(), adaptRoutes(makeIndexUserController()));
usersRoutes.post(
    '/',
    bodyCreateUserValidation(),
    adaptRoutes(makeCreateUserController()),
);
usersRoutes.patch(
    '/avatar',
    isAuthenticated(),
    upload.single('avatar'),
    adaptRoutes(makeUpdateProfileController()),
);
usersRoutes.patch(
    '/',
    isAuthenticated(),
    adaptRoutes(makeUpdateUserController()),
);
usersRoutes.get(
    '/:id',
    isAuthenticated(),
    uuidValidation(),
    adaptRoutes(makeShowUserController()),
);

export { usersRoutes };
