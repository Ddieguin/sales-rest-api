import { getCustomRepository } from 'typeorm';
import { DeleteProductController } from '../controllers/delete-product-controller';
import { DeleteProductService } from '../services/delete-product-service';
import { ProductRepository } from '../typeorm/repositories/product-repository';

export const makeDeleteProductController = (): DeleteProductController => {
    const productRepository = getCustomRepository(ProductRepository);
    const deleteProductService = new DeleteProductService(productRepository);
    return new DeleteProductController(deleteProductService);
};
