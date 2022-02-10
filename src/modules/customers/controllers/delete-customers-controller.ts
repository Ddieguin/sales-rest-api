import { IhttpRequest, IhttpResponse } from '../../../shared/http/ports/http';
import { DeleteCustomersService } from '../services/delete-customers-service';

export class DeleteCustomersController {
    private readonly deleteCustomersService: DeleteCustomersService;

    constructor(deleteCustomersService: DeleteCustomersService) {
        this.deleteCustomersService = deleteCustomersService;
    }

    async handle({ params }: IhttpRequest): Promise<IhttpResponse> {
        await this.deleteCustomersService.execute(params.id);

        return {
            body: {
                sucess: true,
            },
            statusCode: 200,
        };
    }
}
