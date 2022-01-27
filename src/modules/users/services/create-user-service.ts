import { AppError } from '../../../shared/http/errors/app-error';
import { IcreateUserDto } from '../typeorm/dto/create-user-dto';
import { UserRepository } from '../typeorm/repositories/user-repository';

export class CreateUserService {
    private readonly userRepository: UserRepository;

    constructor(userRepository: UserRepository) {
        this.userRepository = userRepository;
    }

    async execute({ username, password, email }: IcreateUserDto) {
        const emailExists = await this.userRepository.findByEmail(email);

        if (emailExists) {
            throw new AppError(`Email adress already used.`);
        }

        const user = await this.userRepository.create({
            username,
            password,
            email,
        });

        await this.userRepository.save(user);

        return user;
    }
}
