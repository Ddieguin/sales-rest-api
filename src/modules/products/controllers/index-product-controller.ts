import { IcontrollerBase } from '../../../shared/controller/controller-base';
import { IhttpResponse } from '../../../shared/http/ports/http';
import { ListProductService } from '../services/list-product-service';

export class IndexProductController implements IcontrollerBase {
    private readonly indexProductService: ListProductService;
    constructor(indexProductService: ListProductService) {
        this.indexProductService = indexProductService;
    }

    async handle(): Promise<IhttpResponse> {
        const products = await this.indexProductService.execute();

        return {
            body: {
                data: products,
            },
            statusCode: 200,
        };
    }
}
