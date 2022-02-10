import { UpdateUserController } from '../controllers/update-user-controller';
import { UpdateUserService } from '../services/update-user-service';
import { UserRepository } from '../typeorm/repositories/user-repository';

export const makeUpdateUserController = (): UpdateUserController => {
    const updateUserService = new UpdateUserService(
        UserRepository.getInstance(),
    );

    const updateUserController = new UpdateUserController(updateUserService);
    return updateUserController;
};
