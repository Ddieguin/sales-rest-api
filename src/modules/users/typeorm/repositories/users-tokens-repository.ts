import { EntityRepository, getCustomRepository, Repository } from 'typeorm';
import { UserToken } from '../entities/user-token';

@EntityRepository(UserToken)
export class UserTokenRepository extends Repository<UserToken> {
    private static instace: UserTokenRepository;

    public static getInstace(): UserTokenRepository {
        if (!UserTokenRepository.instace) {
            UserTokenRepository.instace = getCustomRepository(this);
        }

        return UserTokenRepository.instace;
    }

    async findByToken(token: string): Promise<UserToken | undefined> {
        const userToken = await this.findOne({
            where: {
                token,
            },
        });

        return userToken;
    }

    async generate(user_id: string): Promise<UserToken> {
        const userToken = this.create({
            user_id,
        });

        await this.save(userToken);

        return userToken;
    }
}
