import { CreateProductController } from '../controllers/create-product-controller';
import { CreateProductService } from '../services/create- product-service';
import { ProductRepository } from '../typeorm/repositories/product-repository';

export const makeCreateProductController = (): CreateProductController => {
    const createProductService = new CreateProductService(
        ProductRepository.getInstance(),
    );
    return new CreateProductController(createProductService);
};
