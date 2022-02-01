import { AppError } from '../../../shared/http/errors/app-error';
import { UserRepository } from '../typeorm/repositories/user-repository';
import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import config from '../../../config/auth'

interface IAuthetication {
    email: string;
    password: string;
}

export class CreateSessionService {
    private readonly userRepositoy: UserRepository;
    constructor(userRepository: UserRepository) {
        this.userRepositoy = userRepository;
    }

    async execute({ email, password }: IAuthetication) {
        const user = await this.userRepositoy.findByEmail(email);

        if (!user) {
            throw new AppError(`Incorrect email or password combination.`, 401);
        }

        const isValidPassword = await compare(password, user.password);

        if (!isValidPassword) {
            throw new AppError(`Incorrect email or password combination.`, 401);
        }

        //jwt token
        const token = sign({ id: user.id }, config.jwt.secret, {
            expiresIn: config.jwt.expiresIn,
        });

        return {
            user,
            token,
        };
    }
}
