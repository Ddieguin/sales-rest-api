import { IcontrollerBase } from '../../../shared/controller/controller-base';
import { IhttpRequest, IhttpResponse } from '../../../shared/http/ports/http';
import { ShowProductService } from '../services/show-product-service';

export class ShowProductController implements IcontrollerBase {
    private readonly showProductService: ShowProductService;
    constructor(indexProductService: ShowProductService) {
        this.showProductService = indexProductService;
    }

    async handle({ params }: IhttpRequest): Promise<IhttpResponse> {
        const products = await this.showProductService.execute(params);

        return {
            body: {
                sucess: true,
                data: products,
            },
            status: 200,
        };
    }
}