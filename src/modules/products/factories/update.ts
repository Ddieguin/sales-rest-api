import { getCustomRepository } from 'typeorm';
import { UpdateProductController } from '../controllers/update-product-controller';
import { UpdateProductService } from '../services/update-product-service';
import { ProductRepository } from '../typeorm/repositories/product-repository';

export const makeUpdateProductController = (): UpdateProductController => {
    const productRepository = getCustomRepository(ProductRepository);
    const updateProductService = new UpdateProductService(productRepository);
    return new UpdateProductController(updateProductService);
};
