import { CreateProductController } from '../controllers/create-product-controller';

export const makeCreateProductController = (): CreateProductController => {
    return new CreateProductController();
};
