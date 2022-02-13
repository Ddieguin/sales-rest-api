import { OrderRepository } from '../typeorm/repositories/order-repository';
import { AppError } from '../../../shared/http/errors/app-error';

export class ListOrderByCustomerService {
    constructor(private readonly orderRepository: OrderRepository) {}

    async execute(customer_id: string) {
        const orders = await this.orderRepository.findByCustomer(customer_id);

        if (!orders) {
            throw new AppError('Customer has no orders');
        }

        return orders;
    }
}
