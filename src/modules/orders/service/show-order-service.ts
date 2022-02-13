import { OrderRepository } from '../typeorm/repositories/order-repository';
import { AppError } from '../../../shared/http/errors/app-error';

export class ShowOrderService {
    constructor(private readonly orderRepository: OrderRepository) {}

    async execute(id: string) {
        const orders = await this.orderRepository.findById(id);

        if (!orders) {
            throw new AppError('Orders not found!');
        }

        return orders;
    }
}
