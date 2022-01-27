import { ShowProductController } from '../controllers/show-product-cotroller';
import { ShowProductService } from '../services/show-product-service';
import { SingletonProductRepository } from '../typeorm/repositories/singleton-repository';

export const makeShowProductController = (): ShowProductController => {
    const showProductService = new ShowProductService(
        SingletonProductRepository.getInstance(),
    );
    return new ShowProductController(showProductService);
};
