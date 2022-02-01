import { UpdateProfileController } from '../controllers/update-profile-controller';
import { UpdateProfileService } from '../services/update-profile-service';
import { UserRepository } from '../typeorm/repositories/user-repository';

export const makeUpdateProfileController = (): UpdateProfileController => {
    const updateProfileService = new UpdateProfileService(
        UserRepository.getInstance(),
    );
    const updateProfileController = new UpdateProfileController(
        updateProfileService,
    );
    return updateProfileController;
};
