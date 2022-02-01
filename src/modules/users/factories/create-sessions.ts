import { CreateSessionsController } from '../controllers/auth/create-sessions-controller';
import { CreateSessionService } from '../services/create-session-service';
import { UserRepository } from '../typeorm/repositories/user-repository';

export const makeCreateSessionsController = (): CreateSessionsController => {
    const createSessionsService = new CreateSessionService(
        UserRepository.getInstance(),
    );

    const createCreateSessionsController = new CreateSessionsController(
        createSessionsService,
    );

    return createCreateSessionsController;
};
