import { IcontrollerBase } from '../../../shared/controller/controller-base';
import { IhttpRequest, IhttpResponse } from '../../../shared/http/ports/http';
import { ShowCustomersService } from '../services/show-customers-service';

export class ShowCustomersController implements IcontrollerBase {
    constructor(private readonly showCustomersService: ShowCustomersService) {
        this.showCustomersService = showCustomersService;
    }

    async handle({ params }: IhttpRequest): Promise<IhttpResponse> {
        const customer = await this.showCustomersService.execute(params.id);

        return {
            body: {
                sucess: true,
                data: customer,
            },
            statusCode: 200,
        };
    }
}
