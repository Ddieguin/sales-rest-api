import { AppError } from '../../../shared/http/errors/app-error';
import { IshowProductDto } from '../typeorm/dto/show-product-dto';
import { ProductRepository } from '../typeorm/repositories/product-repository';
import { Product } from '../typeorm/entities/product';

export class ShowProductService {
    private readonly productsRepository: ProductRepository;
    constructor(productsRepository: ProductRepository) {
        this.productsRepository = productsRepository;
    }

    async execute({ id }: IshowProductDto): Promise<Product> {
        const product = await this.productsRepository.findOne({
            where: {
                id_product: id,
            },
        });

        if (!product) {
            throw new AppError(`Product not found`);
        }

        return product;
    }
}
