import { UpdateProductController } from '../controllers/update-product-controller';
import { UpdateProductService } from '../services/update-product-service';
import { ProductRepository } from '../typeorm/repositories/product-repository';

export const makeUpdateProductController = (): UpdateProductController => {
    const updateProductService = new UpdateProductService(
        ProductRepository.getInstance(),
    );
    return new UpdateProductController(updateProductService);
};
