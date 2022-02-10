import { celebrate, Joi, Segments } from 'celebrate';
import { RequestHandler } from 'express';

export const uuidValidation = (): RequestHandler => {
    return celebrate({
        [Segments.PARAMS]: {
            id: Joi.string().uuid().required(),
        },
    });
};
