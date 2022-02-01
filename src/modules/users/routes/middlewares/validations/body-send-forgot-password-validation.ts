import { celebrate, Joi, Segments } from 'celebrate';

export const bodySendForgotPassordValidation = () => {
    return celebrate({
        [Segments.BODY]: {
            email: Joi.string().required(),
        },
    });
};
