import { CreateSessionsController } from '../controllers/auth/create-sessions-controller';
import { CreateSessionService } from '../services/create-session-service';
import { SingletonUserRepository } from '../typeorm/repositories/singleton-repository';

export const makeCreateSessionsController = (): CreateSessionsController => {
    const createSessionsService = new CreateSessionService(
        SingletonUserRepository.getInstance(),
    );

    const createCreateSessionsController = new CreateSessionsController(
        createSessionsService,
    );

    return createCreateSessionsController;
};
