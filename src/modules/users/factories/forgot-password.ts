import { MailService } from '../../../config/mail/mail-service';
import { ForgotPasswordController } from '../controllers/forgot-password-controller';
import { SendForgotPasswordService } from '../services/send-forgot-password-service';
import { UserRepository } from '../typeorm/repositories/user-repository';
import { UserTokenRepository } from '../typeorm/repositories/users-tokens-repository';

export const makeForgotPasswordController = (): ForgotPasswordController => {
    const mailService = new MailService();

    const sendForgotPasswordService = new SendForgotPasswordService(
        UserTokenRepository.getInstace(),
        UserRepository.getInstance(),
        mailService,
    );

    const forgotPasswordController = new ForgotPasswordController(
        sendForgotPasswordService,
    );

    return forgotPasswordController;
};
