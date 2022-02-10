import { IcontrollerBase } from '../../../shared/controller/controller-base';
import { IhttpRequest, IhttpResponse } from '../../../shared/http/ports/http';
import { CreateCustomersService } from '../services/create-customers-service';

export class CreateCustomersController implements IcontrollerBase {
    constructor(
        private readonly createCustomersService: CreateCustomersService,
    ) {
        this.createCustomersService = createCustomersService;
    }

    async handle({ body }: IhttpRequest): Promise<IhttpResponse> {
        const customer = await this.createCustomersService.execute(body);

        return {
            body: {
                sucess: true,
                data: customer,
            },
            statusCode: 201,
        };
    }
}
