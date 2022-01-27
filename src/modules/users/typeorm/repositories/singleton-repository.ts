import { getCustomRepository } from 'typeorm';
import { UserRepository } from './user-repository';

export class SingletonUserRepository {
    private static instance: UserRepository;

    static getInstance() {
        if (!SingletonUserRepository.instance) {
            SingletonUserRepository.instance =
                getCustomRepository(UserRepository);
        }

        return SingletonUserRepository.instance;
    }
}
