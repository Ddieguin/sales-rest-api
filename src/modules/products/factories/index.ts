import { IndexProductController } from '../controllers/index-product-controller';
import { ListProductService } from '../services/list-product-service';
import { ProductRepository } from '../typeorm/repositories/product-repository';

export const makeIndexProductController = (): IndexProductController => {
    const listProductService = new ListProductService(
        ProductRepository.getInstance(),
    );
    return new IndexProductController(listProductService);
};
