import { CreateUserController } from '../controllers/create-user-controller';
import { CreateUserService } from '../services/create-user-service';
import { SingletonUserRepository } from '../typeorm/repositories/singleton-repository';

export const makeCreateUserController = (): CreateUserController => {
    const createUserService = new CreateUserService(
        SingletonUserRepository.getInstance(),
    );
    const createUserController = new CreateUserController(createUserService);
    return createUserController;
};
