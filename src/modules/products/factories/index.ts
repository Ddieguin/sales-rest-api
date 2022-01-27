import { IndexProductController } from '../controllers/index-product-controller';
import { ListProductService } from '../services/list-product-service';
import { SingletonProductRepository } from '../typeorm/repositories/singleton-repository';

export const makeIndexProductController = (): IndexProductController => {
    const listProductService = new ListProductService(
        SingletonProductRepository.getInstance(),
    );
    return new IndexProductController(listProductService);
};
