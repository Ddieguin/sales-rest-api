import { CreateOrderService } from '../service/create-order-service';
import { IcontrollerBase } from '../../../shared/controller/controller-base';
import { IhttpRequest, IhttpResponse } from '../../../shared/http/ports/http';

export class CreateOrderController implements IcontrollerBase {
    constructor(private readonly createOrderController: CreateOrderService) {}

    async handle({ body }: IhttpRequest): Promise<IhttpResponse> {
        const order = await this.createOrderController.execute(body);

        return {
            body: {
                sucess: true,
                data: order,
            },
            statusCode: 201,
        };
    }
}
