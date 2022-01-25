import { RequestHandler } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';

export const bodyCreateProductValidation = (): RequestHandler => {
    return celebrate({
        [Segments.BODY]: {
            name_product: Joi.string().required(),
            quantity: Joi.number().required(),
            price_product: Joi.number().precision(2).required(),
        },
    });
};
