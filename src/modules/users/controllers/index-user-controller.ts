import { IcontrollerBase } from '../../../shared/controller/controller-base';
import { IhttpResponse } from '../../../shared/http/ports/http';
import { ListUserService } from '../services/list- user-service';

export class IndexUserController implements IcontrollerBase {
    private readonly listUserService: ListUserService;

    constructor(listUserService: ListUserService) {
        this.listUserService = listUserService;
    }

    async handle(): Promise<IhttpResponse> {
        const users = await this.listUserService.execute();

        return {
            body: {
                sucess: true,
                data: users,
            },
            statusCode: 200,
        };
    }
}
