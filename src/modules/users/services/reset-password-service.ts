import { hash } from 'bcrypt';
import { addHours, isAfter } from 'date-fns';
import { AppError } from '../../../shared/http/errors/app-error';
import { UserRepository } from '../typeorm/repositories/user-repository';
import { UserTokenRepository } from '../typeorm/repositories/users-tokens-repository';

interface IrequestResetPassword {
    token: string;
    password: string;
}

export class ResetPasswordService {
    private readonly userTokenRepository: UserTokenRepository;
    private readonly userRespository: UserRepository;

    constructor(
        userTokenRepository: UserTokenRepository,
        userRepository: UserRepository,
    ) {
        this.userTokenRepository = userTokenRepository;
        this.userRespository = userRepository;
    }

    async execute({ token, password }: IrequestResetPassword) {
        const userToken = await this.userTokenRepository.findByToken(token);

        if (!userToken) {
            throw new AppError(`User Token does not exists`);
        }

        const user = await this.userRespository.findById(userToken.user_id);

        if (!user) {
            throw new AppError(`User does not exists.`);
        }

        const tokenCreatedAt = userToken.created_at;
        const compareDate = addHours(tokenCreatedAt, 2);

        if (isAfter(Date.now(), compareDate)) {
            throw new AppError(`Token expired.`);
        }

        user.password = await hash(password, 8);

        await this.userRespository.save(user);
    }
}
