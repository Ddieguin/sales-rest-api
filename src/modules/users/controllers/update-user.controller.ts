import { IcontrollerBase } from '../../../shared/controller/controller-base';
import { IhttpResponse, IhttpRequest } from '../../../shared/http/ports/http';
import { UpdateUserService } from '../services/update-user-service';

export class UpdateUserController implements IcontrollerBase {
    private readonly updateUserService: UpdateUserService;

    constructor(updateUserService: UpdateUserService) {
        this.updateUserService = updateUserService;
    }

    async handle({ body, user_id }: IhttpRequest): Promise<IhttpResponse> {
        const user = await this.updateUserService.execute({
            ...body,
            user_id,
        });

        return {
            body: {
                sucess: true,
                data: user,
            },
            statusCode: 200,
        };
    }
}
