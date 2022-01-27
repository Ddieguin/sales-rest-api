import { IcontrollerBase } from '../../../../shared/controller/controller-base';
import {
    IhttpRequest,
    IhttpResponse,
} from '../../../../shared/http/ports/http';
import { CreateSessionService } from '../../services/create-session-service';

export class CreateSessionsController implements IcontrollerBase {
    private createSessionService: CreateSessionService;

    constructor(createSessionService: CreateSessionService) {
        this.createSessionService = createSessionService;
    }

    async handle({ body }: IhttpRequest): Promise<IhttpResponse> {
        const createSession = await this.createSessionService.execute(body);

        return {
            body: {
                data: createSession,
            },
            statusCode: 200,
        };
    }
}
