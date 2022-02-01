import { DeleteProductController } from '../controllers/delete-product-controller';
import { DeleteProductService } from '../services/delete-product-service';
import { ProductRepository } from '../typeorm/repositories/product-repository';

export const makeDeleteProductController = (): DeleteProductController => {
    const deleteProductService = new DeleteProductService(
        ProductRepository.getInstance(),
    );
    return new DeleteProductController(deleteProductService);
};
