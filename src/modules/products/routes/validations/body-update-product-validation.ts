import { RequestHandler } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';

export const bodyUpdateProductValidation = (): RequestHandler => {
    return celebrate({
        [Segments.BODY]: {
            price_product: Joi.number().precision(2),
            quantity: Joi.number(),
        },
    });
};
