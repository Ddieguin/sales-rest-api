import { IhttpRequest, IhttpResponse } from '../../../shared/http/ports/http';
import { UpdateProductService } from '../services/update-product-service';

export class UpdateProductController {
    private readonly updateProductService: UpdateProductService;

    constructor(updateProductService: UpdateProductService) {
        this.updateProductService = updateProductService;
    }

    async handle({ body, params }: IhttpRequest): Promise<IhttpResponse> {
        const product = await this.updateProductService.execute({
            ...body,
            ...params,
        });

        return {
            body: {
                sucess: true,
                data: product,
            },
            status: 200,
        };
    }
}
