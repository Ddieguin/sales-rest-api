import { IcontrollerBase } from '../../../shared/controller/controller-base';
import { IhttpRequest, IhttpResponse } from '../../../shared/http/ports/http';
import { CreateUserService } from '../services/create-user-service';

export class CreateUserController implements IcontrollerBase {
    private readonly createUserService: CreateUserService;

    constructor(createUserService: CreateUserService) {
        this.createUserService = createUserService;
    }

    async handle({ body }: IhttpRequest): Promise<IhttpResponse> {
        const user = await this.createUserService.execute(body);

        return {
            body: {
                sucess: true,
                data: user,
            },
            statusCode: 201,
        };
    }
}
