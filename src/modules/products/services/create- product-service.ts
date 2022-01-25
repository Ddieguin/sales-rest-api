import { IcreateProductDto } from '../typeorm/dto/create-product-dto';
import { ProductRepository } from '../typeorm/repositories/product-repository';
import { Product } from '../typeorm/entities/product';
import { AppError } from '../../../shared/http/errors/app-error';

export class CreateProductService {
    private readonly productsRepository: ProductRepository;
    constructor(productsRepository: ProductRepository) {
        this.productsRepository = productsRepository;
    }

    async execute({
        name_product,
        price_product,
        quantity,
    }: IcreateProductDto): Promise<Product> {
        const productExists = await this.productsRepository.findByName(
            name_product,
        );

        if (productExists) {
            throw new AppError(`Product already exists`);
        }

        const product = await this.productsRepository.create({
            name_product,
            price_product,
            quantity,
        });

        await this.productsRepository.save(product);

        return product;
    }
}
