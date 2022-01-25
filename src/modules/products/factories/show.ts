import { getCustomRepository } from 'typeorm';
import { ShowProductController } from '../controllers/show-product-cotroller';
import { ShowProductService } from '../services/show-product-service';
import { ProductRepository } from '../typeorm/repositories/product-repository';

export const makeShowProductController = (): ShowProductController => {
    const productRepository = getCustomRepository(ProductRepository);
    const showProductService = new ShowProductService(productRepository);
    return new ShowProductController(showProductService);
};
