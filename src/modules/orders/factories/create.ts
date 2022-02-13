import { CreateOrderService } from '../service/create-order-service';
import { OrderRepository } from '../typeorm/repositories/order-repository';
import { CustomersRepository } from '../../customers/typeorm/repositories/customers-repository';
import { ProductRepository } from '../../products/typeorm/repositories/product-repository';
import { CreateOrderController } from '../controllers/create-order-controller';

export const makeCreateOrderController = (): CreateOrderController => {
    const createOrderService = new CreateOrderService(
        OrderRepository.getInstance(),
        CustomersRepository.getInstance(),
        ProductRepository.getInstance(),
    );

    const createOrderController = new CreateOrderController(createOrderService);

    return createOrderController;
};
