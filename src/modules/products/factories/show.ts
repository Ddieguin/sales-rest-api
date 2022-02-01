import { ShowProductController } from '../controllers/show-product-cotroller';
import { ShowProductService } from '../services/show-product-service';
import { ProductRepository } from '../typeorm/repositories/product-repository';

export const makeShowProductController = (): ShowProductController => {
    const showProductService = new ShowProductService(
        ProductRepository.getInstance(),
    );
    return new ShowProductController(showProductService);
};
