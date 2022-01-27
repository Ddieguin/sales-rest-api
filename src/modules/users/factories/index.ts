import { IndexUserController } from '../controllers/index-user-controller';
import { ListUserService } from '../services/list- user-service';
import { SingletonUserRepository } from '../typeorm/repositories/singleton-repository';

export const makeIndexUserController = (): IndexUserController => {
    const createUserService = new ListUserService(
        SingletonUserRepository.getInstance(),
    );
    const indexUserController = new IndexUserController(createUserService);
    return indexUserController;
};
