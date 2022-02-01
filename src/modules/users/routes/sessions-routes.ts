import { Router } from 'express';
import { adaptRoutes } from '../../../shared/http/adapters/express-adapter';
import { makeCreateSessionsController } from '../factories/create-sessions';

const sessionsRoutes = Router();

sessionsRoutes.post('/', adaptRoutes(makeCreateSessionsController()));

export { sessionsRoutes };
