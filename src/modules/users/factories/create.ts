import { CreateUserController } from '../controllers/create-user-controller';
import { CreateUserService } from '../services/create-user-service';
import { UserRepository } from '../typeorm/repositories/user-repository';

export const makeCreateUserController = (): CreateUserController => {
    const createUserService = new CreateUserService(
        UserRepository.getInstance(),
    );
    const createUserController = new CreateUserController(createUserService);
    return createUserController;
};
