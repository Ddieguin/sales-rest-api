import { ShowOrderService } from '../service/show-order-service';
import { IcontrollerBase } from '../../../shared/controller/controller-base';
import { IhttpRequest, IhttpResponse } from '../../../shared/http/ports/http';

export class ShowOrderController implements IcontrollerBase {
    constructor(private readonly showOrderService: ShowOrderService) {}

    async handle({ params }: IhttpRequest): Promise<IhttpResponse> {
        const order = await this.showOrderService.execute(params.id);

        return {
            body: {
                sucess: true,
                data: order,
            },
            statusCode: 200,
        };
    }
}
