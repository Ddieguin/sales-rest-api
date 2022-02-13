import { IcontrollerBase } from '../../../shared/controller/controller-base';
import { IhttpResponse } from '../../../shared/http/ports/http';
import { ListOrderService } from '../service/list-order-service';

export class IndexOrderController implements IcontrollerBase {
    constructor(private readonly listOrderService: ListOrderService) {}

    async handle(): Promise<IhttpResponse> {
        const orders = await this.listOrderService.execute();

        return {
            body: {
                sucess: true,
                data: orders,
            },
            statusCode: 200,
        };
    }
}
