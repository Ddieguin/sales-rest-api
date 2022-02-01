import { IcontrollerBase } from '../../../shared/controller/controller-base';
import { IhttpResponse, IhttpRequest } from '../../../shared/http/ports/http';
import { ResetPasswordService } from '../services/reset-password-service';

export class ResetPasswordController implements IcontrollerBase {
    private readonly resetPasswordService: ResetPasswordService;

    constructor(resetPasswordService: ResetPasswordService) {
        this.resetPasswordService = resetPasswordService;
    }

    async handle({ body, params }: IhttpRequest): Promise<IhttpResponse> {
        await this.resetPasswordService.execute({ ...body, ...params });

        return {
            body: {
                data: {},
                sucess: true,
            },
            statusCode: 204,
        };
    }
}
