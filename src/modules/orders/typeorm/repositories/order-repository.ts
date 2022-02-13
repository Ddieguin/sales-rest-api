import { EntityRepository, getCustomRepository, Repository } from 'typeorm';
import { IcreateOrderDto } from '../dto/create';
import { Order } from '../entities/order';

@EntityRepository(Order)
export class OrderRepository extends Repository<Order> {
    private static instance: OrderRepository;

    static getInstance(): OrderRepository {
        if (!OrderRepository.instance) {
            OrderRepository.instance = getCustomRepository(this);
        }

        return OrderRepository.instance;
    }

    async findById(id: string): Promise<Order | undefined> {
        const order = await this.findOne(id, {
            relations: ['order_products', 'customer'],
        });

        return order;
    }

    async findAll(): Promise<Order[] | undefined> {
        const orders = await this.find({
            relations: ['order_products', 'customer'],
        });

        return orders;
    }

    async findByCustomer(customer_id: string): Promise<Order[] | undefined> {
        const orders = await this.find({
            where: {
                customer_id,
            },
            relations: ['orders_products'],
        });

        return orders;
    }

    async createOrder({ customer, products }: IcreateOrderDto): Promise<Order> {
        const order = this.create({
            customer: customer,
            order_products: products,
        });

        await this.save(order);

        return order;
    }
}
