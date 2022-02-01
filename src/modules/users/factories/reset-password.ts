import { ResetPasswordController } from '../controllers/reset-password-controller';
import { ResetPasswordService } from '../services/reset-password-service';
import { UserRepository } from '../typeorm/repositories/user-repository';
import { UserTokenRepository } from '../typeorm/repositories/users-tokens-repository';

export const makeResetPasswordController = (): ResetPasswordController => {
    const resetPasswordService = new ResetPasswordService(
        UserTokenRepository.getInstace(),
        UserRepository.getInstance(),
    );

    const resetPasswordController = new ResetPasswordController(
        resetPasswordService,
    );

    return resetPasswordController;
};
