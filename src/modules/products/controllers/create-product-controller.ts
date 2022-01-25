import { IcontrollerBase } from '../../../shared/controller/controller-base';
import { IhttpRequest, IhttpResponse } from '../../../shared/http/ports/http';
import { CreateProductService } from '../services/create- product-service';

export class CreateProductController implements IcontrollerBase {
    private readonly createProductService: CreateProductService;

    constructor(createProductService: CreateProductService) {
        this.createProductService = createProductService;
    }

    async handle({ body }: IhttpRequest): Promise<IhttpResponse> {
        const product = await this.createProductService.execute(body);

        return {
            body: {
                sucess: true,
                data: product,
            },
            statusCode: 201,
        };
    }
}
