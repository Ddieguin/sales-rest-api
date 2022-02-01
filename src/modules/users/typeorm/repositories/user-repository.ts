import { EntityRepository, getCustomRepository, Repository } from 'typeorm';
import { User } from '../entities/user';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
    private static instance: UserRepository;

    public static getInstance(): UserRepository {
        if (!UserRepository.instance) {
            UserRepository.instance = getCustomRepository(this);
        }

        return UserRepository.instance;
    }

    async findByName(username: string): Promise<User | undefined> {
        const user = await this.findOne({
            where: {
                username,
            },
        });

        return user;
    }

    async findByEmail(email: string): Promise<User | undefined> {
        const user = await this.findOne({
            where: {
                email,
            },
        });

        return user;
    }

    async findById(id: string): Promise<User | undefined> {
        const user = await this.findOne({
            where: {
                id,
            },
        });

        return user;
    }
}
