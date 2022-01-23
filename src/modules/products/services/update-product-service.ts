import e from 'express';
import { AppError } from '../../../shared/http/errors/app-error';
import { IupdateProductDto } from '../typeorm/dto/update-product-dto';
import { Product } from '../typeorm/entities/product';
import { ProductRepository } from '../typeorm/repositories/product-repository';

export class UpdateProductService {
    private readonly productsRepository: ProductRepository;
    constructor(productsRepository: ProductRepository) {
        this.productsRepository = productsRepository;
    }

    async execute({
        id,
        price_product,
        quantity,
    }: IupdateProductDto): Promise<Product | undefined> {
        const product = await this.productsRepository.findOne({
            where: {
                id_product: id,
            },
        });

        if (!product) {
            throw new AppError(`Product not found`);
        }

        product.quantity = quantity;
        product.price_product = price_product;

        await this.productsRepository.save(product);

        return product;
    }
}
