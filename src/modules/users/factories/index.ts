import { IndexUserController } from '../controllers/index-user-controller';
import { ListUserService } from '../services/list- user-service';
import { UserRepository } from '../typeorm/repositories/user-repository';

export const makeIndexUserController = (): IndexUserController => {
    const createUserService = new ListUserService(UserRepository.getInstance());
    const indexUserController = new IndexUserController(createUserService);
    return indexUserController;
};
