import { celebrate, Joi, Segments } from 'celebrate';

export const bodyResetPasswordValidation = () => {
    return celebrate({
        [Segments.BODY]: {
            password: Joi.string().required(),
            password_confirmation: Joi.string()
                .required()
                .valid(Joi.ref('password')),
        },
    });
};
