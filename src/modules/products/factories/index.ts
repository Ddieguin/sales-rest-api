import { getCustomRepository } from 'typeorm';
import { IndexProductController } from '../controllers/index-product-controller';
import { ListProductService } from '../services/list-product-service';
import { ProductRepository } from '../typeorm/repositories/product-repository';

export const makeIndexProductController = (): IndexProductController => {
    const productRepository = getCustomRepository(ProductRepository);
    const listProductService = new ListProductService(productRepository);
    return new IndexProductController(listProductService);
};
