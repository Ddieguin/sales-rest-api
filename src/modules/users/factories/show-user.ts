import { ShowUserController } from '../controllers/show-user-controller';
import { ShowUserService } from '../services/show-user-service';
import { UserRepository } from '../typeorm/repositories/user-repository';

export const makeShowUserController = () => {
    const showUserService = new ShowUserService(UserRepository.getInstance());

    const showUserController = new ShowUserController(showUserService);

    return showUserController;
};
