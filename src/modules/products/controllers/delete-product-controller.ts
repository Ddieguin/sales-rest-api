import { IcontrollerBase } from '../../../shared/controller/controller-base';
import { IhttpRequest, IhttpResponse } from '../../../shared/http/ports/http';
import { DeleteProductService } from '../services/delete-product-service';

export class DeleteProductController implements IcontrollerBase {
    private readonly deleteProductService: DeleteProductService;
    constructor(deleteProductService: DeleteProductService) {
        this.deleteProductService = deleteProductService;
    }

    async handle({ params }: IhttpRequest): Promise<IhttpResponse> {
        await this.deleteProductService.execute(params);

        return {
            body: {
                sucess: true,
            },
            status: 200,
        };
    }
}
