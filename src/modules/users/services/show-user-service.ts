import { AppError } from '../../../shared/http/errors/app-error';
import { User } from '../typeorm/entities/user';
import { UserRepository } from '../typeorm/repositories/user-repository';

export class ShowUserService {
    private readonly userRepository: UserRepository;

    constructor(userRepository: UserRepository) {
        this.userRepository = userRepository;
    }

    async execute(id: string): Promise<User> {
        const user = await this.userRepository.findById(id);

        if (!user) {
            throw new AppError('user was not found');
        }

        return user;
    }
}
