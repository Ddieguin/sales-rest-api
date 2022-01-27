import { UpdateProductController } from '../controllers/update-product-controller';
import { UpdateProductService } from '../services/update-product-service';
import { SingletonProductRepository } from '../typeorm/repositories/singleton-repository';

export const makeUpdateProductController = (): UpdateProductController => {
    const updateProductService = new UpdateProductService(
        SingletonProductRepository.getInstance(),
    );
    return new UpdateProductController(updateProductService);
};
