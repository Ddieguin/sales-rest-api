import { getCustomRepository } from 'typeorm';
import { ProductRepository } from './product-repository';

export class SingletonProductRepository {
    private static instance: ProductRepository;

    static getInstance() {
        if (!SingletonProductRepository.instance) {
            SingletonProductRepository.instance =
                getCustomRepository(ProductRepository);
        }

        return SingletonProductRepository.instance;
    }
}
