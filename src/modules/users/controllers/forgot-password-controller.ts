import { IcontrollerBase } from '../../../shared/controller/controller-base';
import { IhttpRequest, IhttpResponse } from '../../../shared/http/ports/http';
import { SendForgotPasswordService } from '../services/send-forgot-password-service';

export class ForgotPasswordController implements IcontrollerBase {
    private readonly sendForgotPasswordService: SendForgotPasswordService;

    constructor(sendForgotPasswordService: SendForgotPasswordService) {
        this.sendForgotPasswordService = sendForgotPasswordService;
    }

    async handle({ body }: IhttpRequest): Promise<IhttpResponse> {
        await this.sendForgotPasswordService.execute(body);

        return {
            body: {
                sucess: true,
            },
            statusCode: 204,
        };
    }
}
