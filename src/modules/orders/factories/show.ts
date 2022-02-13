import { ShowOrderController } from '../controllers/show-order-controller';
import { ShowOrderService } from '../service/show-order-service';
import { OrderRepository } from '../typeorm/repositories/order-repository';

export const makeShowOrderController = (): ShowOrderController => {
    const showOrderService = new ShowOrderService(
        OrderRepository.getInstance(),
    );

    const showOrderController = new ShowOrderController(showOrderService);

    return showOrderController;
};
