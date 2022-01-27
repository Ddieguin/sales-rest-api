import { CreateProductController } from '../controllers/create-product-controller';
import { CreateProductService } from '../services/create- product-service';
import { SingletonProductRepository } from '../typeorm/repositories/singleton-repository';

export const makeCreateProductController = (): CreateProductController => {
    const createProductService = new CreateProductService(
        SingletonProductRepository.getInstance(),
    );
    return new CreateProductController(createProductService);
};
