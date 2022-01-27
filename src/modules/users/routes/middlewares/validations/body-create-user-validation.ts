import { celebrate, Joi, Segments } from 'celebrate';

export const bodyCreateUserValidation = () => {
    return celebrate({
        [Segments.BODY]: {
            username: Joi.string().required(),
            password: Joi.string().required(),
            email: Joi.string().required(),
        },
    });
};
