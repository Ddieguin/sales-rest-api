import path from 'path';
import { AppError } from '../../../shared/http/errors/app-error';
import { IuploadProfilePictureDto } from '../typeorm/dto/upload-profile-dto';
import { UserRepository } from '../typeorm/repositories/user-repository';
import uploadConfig from '../../../config/upload';
import fs from 'fs/promises';
import { User } from '../typeorm/entities/user';

export class UpdateProfileService {
    private readonly userRepository: UserRepository;

    constructor(userRepository: UserRepository) {
        this.userRepository = userRepository;
    }

    async execute({
        user_id,
        profilePictureName,
    }: IuploadProfilePictureDto): Promise<User> {
        const user = await this.userRepository.findById(user_id);

        if (!user) {
            throw new AppError(`User not found`);
        }

        if (user.profile_picture) {
            const userProfilePicturePath = path.join(
                uploadConfig.directory,
                user.profile_picture,
            );

            const userProfilePictureExists = await fs.stat(
                userProfilePicturePath,
            );

            if (userProfilePictureExists) {
                await fs.unlink(userProfilePicturePath);
            }
        }

        user.profile_picture = profilePictureName;

        await this.userRepository.save(user);

        return user;
    }
}
