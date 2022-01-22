import { ProductRepository } from '../typeorm/repositories/product-repository';
import { Product } from '../typeorm/entities/product';
export class ListProductService {
    private readonly productsRepository: ProductRepository;
    constructor(productsRepository: ProductRepository) {
        this.productsRepository = productsRepository;
    }

    async execute(): Promise<Product[]> {
        const products = await this.productsRepository.find();

        return products;
    }
}
