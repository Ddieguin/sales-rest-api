import { EntityRepository, Repository } from 'typeorm';
import { Product } from '../entities/product';

@EntityRepository(Product)
export class ProductRepository extends Repository<Product> {
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
}
