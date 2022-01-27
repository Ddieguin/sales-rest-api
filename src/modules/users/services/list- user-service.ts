import { User } from '../typeorm/entities/user';
import { UserRepository } from '../typeorm/repositories/user-repository';

export class ListUserService {
    private readonly userRepository: UserRepository;

    constructor(userRepository: UserRepository) {
        this.userRepository = userRepository;
    }

    async execute(): Promise<User[]> {
        const users = await this.userRepository.find();

        return users;
    }
}
