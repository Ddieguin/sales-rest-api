import { DeleteProductController } from '../controllers/delete-product-controller';
import { DeleteProductService } from '../services/delete-product-service';
import { SingletonProductRepository } from '../typeorm/repositories/singleton-repository';

export const makeDeleteProductController = (): DeleteProductController => {
    const deleteProductService = new DeleteProductService(
        SingletonProductRepository.getInstance(),
    );
    return new DeleteProductController(deleteProductService);
};
