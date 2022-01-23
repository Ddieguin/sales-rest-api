import { AppError } from '../../../shared/http/errors/app-error';
import { IdeleteProductDto } from '../typeorm/dto/delete-product-dto';
import { ProductRepository } from '../typeorm/repositories/product-repository';

export class DeleteProductService {
    private readonly productsRepository: ProductRepository;
    constructor(productsRepository: ProductRepository) {
        this.productsRepository = productsRepository;
    }

    async execute({ id }: IdeleteProductDto): Promise<void> {
        const productExists = await this.productsRepository.findOne({
            where: {
                id_product: id,
            },
        });

        if (!productExists) {
            throw new AppError('Product not found');
        }

        await this.productsRepository.remove(productExists);
    }
}
