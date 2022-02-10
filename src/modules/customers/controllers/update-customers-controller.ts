import { IcontrollerBase } from '../../../shared/controller/controller-base';
import { IhttpRequest, IhttpResponse } from '../../../shared/http/ports/http';
import { UpdateCustomersService } from '../services/update-customers-service';

export class UpdateCustomersController implements IcontrollerBase {
    constructor(
        private readonly updateCustomersService: UpdateCustomersService,
    ) {
        this.updateCustomersService = updateCustomersService;
    }

    async handle({ body, params }: IhttpRequest): Promise<IhttpResponse> {
        const customer = await this.updateCustomersService.execute({
            ...body,
            ...params,
        });

        return {
            body: {
                data: customer,
            },
            statusCode: 200,
        };
    }
}
