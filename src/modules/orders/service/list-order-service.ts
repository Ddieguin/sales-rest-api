import { OrderRepository } from '../typeorm/repositories/order-repository';
import { AppError } from '../../../shared/http/errors/app-error';

export class ListOrderService {
    constructor(private readonly orderRepository: OrderRepository) {}

    async execute() {
        const order = await this.orderRepository.findAll();

        if (!order) {
            throw new AppError('Order not found!');
        }

        return order;
    }
}
