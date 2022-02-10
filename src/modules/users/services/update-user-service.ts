import { compare, hash } from 'bcrypt';
import { AppError } from '../../../shared/http/errors/app-error';
import { IuploadUserDto } from '../typeorm/dto/upload-user-dto';
import { User } from '../typeorm/entities/user';
import { UserRepository } from '../typeorm/repositories/user-repository';

export class UpdateUserService {
    private readonly userRepository: UserRepository;

    constructor(userRepository: UserRepository) {
        this.userRepository = userRepository;
    }

    async execute({
        username,
        password,
        new_password,
        email,
        user_id,
    }: IuploadUserDto): Promise<User> {
        const user = await this.userRepository.findOne({
            where: {
                id: user_id,
            },
        });

        if (!user) {
            throw new AppError('User is not exists');
        }

        const emailAlreadyExists = await this.userRepository.findOne({
            where: {
                email,
            },
        });

        if (emailAlreadyExists && user.email != email) {
            throw new AppError('Email already in use');
        }

        const isValidPassword = await compare(password, user.password);

        if (!isValidPassword) {
            throw new AppError('Password is not a match');
        }

        user.username = username;
        user.email = email;
        user.password = await hash(new_password, 8);

        await this.userRepository.save(user);

        return user;
    }
}
