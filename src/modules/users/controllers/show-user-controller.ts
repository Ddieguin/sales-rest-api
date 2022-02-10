import { IcontrollerBase } from '../../../shared/controller/controller-base';
import { IhttpResponse, IhttpRequest } from '../../../shared/http/ports/http';
import { ShowUserService } from '../services/show-user-service';

export class ShowUserController implements IcontrollerBase {
    private readonly showUserService: ShowUserService;

    constructor(showUserService: ShowUserService) {
        this.showUserService = showUserService;
    }

    async handle({ params }: IhttpRequest): Promise<IhttpResponse> {
        const user = await this.showUserService.execute(params.id);

        return {
            body: {
                sucess: true,
                data: user,
            },
            statusCode: 200,
        };
    }
}
