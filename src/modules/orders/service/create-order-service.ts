import { OrderRepository } from '../typeorm/repositories/order-repository';
import { Iproduct } from '../typeorm/dto/create';
import { CustomersRepository } from '../../customers/typeorm/repositories/customers-repository';
import { AppError } from '../../../shared/http/errors/app-error';
import { ProductRepository } from '../../products/typeorm/repositories/product-repository';
import { Order } from '../typeorm/entities/order';
import { Product } from '../../products/typeorm/entities/product';

export interface IcreateOrder {
    customer_id: string;
    products: Iproduct[];
}

export class CreateOrderService {
    constructor(
        private readonly orderRepository: OrderRepository,
        private readonly customerRepository: CustomersRepository,
        private readonly productsRepository: ProductRepository,
    ) {}

    async execute({ customer_id, products }: IcreateOrder): Promise<Order> {
        const customerExists = await this.customerRepository.findById(
            customer_id,
        );

        if (!customerExists) {
            throw new AppError('Could not find any customer with the given id');
        }

        const cache: Product[] = [];

        for (const product of products) {
            const productsExists = await this.productsRepository.findById(
                product.id_product,
            );
            if (!productsExists) {
                throw new AppError(
                    'Could not find any products with the given ids is not a match',
                );
            } else if (product.quantity > productsExists.getQuantity()) {
                throw new AppError(
                    `Quantity ${product.quantity} is not available for ${productsExists.id_product}`,
                );
            }
            cache.push(productsExists);
        }

        for (let i = 0; i < products.length; i++) {
            await this.productsRepository.update(products[i].id_product, {
                quantity: cache[i].quantity - products[i].quantity,
            });
        }

        const prod = cache.map(el => {
            return {
                id_product: el.id_product,
                price: el.price_product,
                quantity: el.quantity,
            };
        });

        const order = await this.orderRepository.createOrder({
            customer: customerExists,
            products: prod,
        });

        return order;
    }
}
