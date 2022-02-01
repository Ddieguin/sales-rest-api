import { MailService } from '../../../config/mail/mail-service';
import { AppError } from '../../../shared/http/errors/app-error';
import { UserRepository } from '../typeorm/repositories/user-repository';
import { UserTokenRepository } from '../typeorm/repositories/users-tokens-repository';
import path from 'path';

interface IrequestForgotPassword {
    email: string;
}

export class SendForgotPasswordService {
    private readonly userTokenRepository: UserTokenRepository;
    private readonly userRepository: UserRepository;
    private readonly mailService: MailService;

    constructor(
        userTokenRepository: UserTokenRepository,
        userRepository: UserRepository,
        mailService: MailService,
    ) {
        this.userTokenRepository = userTokenRepository;
        this.userRepository = userRepository;
        this.mailService = mailService;
    }

    async execute({ email }: IrequestForgotPassword): Promise<void> {
        const pathForgotMailTemplate = path.resolve(
            __dirname,
            '..',
            'views',
            'forgot-password.hbs',
        );

        const user = await this.userRepository.findOne({
            where: {
                email,
            },
        });

        if (!user) {
            throw new AppError(`User does not exists.`);
        }

        const { token } = await this.userTokenRepository.generate(user.id);

        await this.mailService.sendMail({
            to: {
                name: user.username,
                email: user.email,
            },
            templateData: {
                file: pathForgotMailTemplate,
                variables: {
                    name: user.username,
                    link: `http://localhost:${process.env.PORT}/api/reset_password/${token}`,
                },
            },
            subject: '[sales-api] password recover',
        });
    }
}
