import { EntityRepository, getCustomRepository, Repository } from 'typeorm';
import { Iproduct } from '../../../orders/typeorm/dto/create';
import { Product } from '../entities/product';

@EntityRepository(Product)
export class ProductRepository extends Repository<Product> {
    private static instance: ProductRepository;

    public static getInstance(): ProductRepository {
        if (!ProductRepository.instance) {
            ProductRepository.instance = getCustomRepository(this);
        }

        return ProductRepository.instance;
    }

    findByName(name: string): Promise<Product | undefined> {
        const product = this.findOne({
            where: {
                name_product: name,
            },
        });

        return product;
    }

    async exists(id: string) {
        const result = await this.findOne({
            where: {
                id_product: id,
            },
        });

        return result ? true : false;
    }

    async findById(id: string) {
        const product = await this.findOne({
            where: {
                id_product: id,
            },
        });
        return product;
    }
}
