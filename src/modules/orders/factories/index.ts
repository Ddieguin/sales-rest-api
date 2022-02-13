import { IndexOrderController } from '../controllers/index-order-controller';
import { ListOrderService } from '../service/list-order-service';
import { OrderRepository } from '../typeorm/repositories/order-repository';

export const makeIndexOrderController = (): IndexOrderController => {
    const listOrderService = new ListOrderService(
        OrderRepository.getInstance(),
    );

    const indexOrderController = new IndexOrderController(listOrderService);

    return indexOrderController;
};
