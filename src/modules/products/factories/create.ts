import { getCustomRepository } from 'typeorm';
import { CreateProductController } from '../controllers/create-product-controller';
import { CreateProductService } from '../services/create- product-service';
import { ProductRepository } from '../typeorm/repositories/product-repository';

export const makeCreateProductController = (): CreateProductController => {
    const productRepository = getCustomRepository(ProductRepository);
    const createProductService = new CreateProductService(productRepository);
    return new CreateProductController(createProductService);
};
