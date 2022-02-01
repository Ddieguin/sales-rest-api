import { Router } from 'express';
import { adaptRoutes } from '../../../shared/http/adapters/express-adapter';
import { makeForgotPasswordController } from '../factories/forgot-password';
import { makeResetPasswordController } from '../factories/reset-password';
import { bodyResetPasswordValidation } from './middlewares/validations/body-reset-password-validation';
import { bodySendForgotPassordValidation } from './middlewares/validations/body-send-forgot-password-validation';

const passwordRouter = Router();

passwordRouter.get(
    '/',
    bodySendForgotPassordValidation(),
    adaptRoutes(makeForgotPasswordController()),
),
    passwordRouter.post(
        '/:token',
        bodyResetPasswordValidation(),
        adaptRoutes(makeResetPasswordController()),
    );

export { passwordRouter };
