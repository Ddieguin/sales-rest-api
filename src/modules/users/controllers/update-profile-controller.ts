import { IcontrollerBase } from '../../../shared/controller/controller-base';
import { IhttpRequest, IhttpResponse } from '../../../shared/http/ports/http';
import { UpdateProfileService } from '../services/update-profile-service';

export class UpdateProfileController implements IcontrollerBase {
    private readonly updateProfileService: UpdateProfileService;

    constructor(updateProfileService: UpdateProfileService) {
        this.updateProfileService = updateProfileService;
    }

    async handle({ user_id, file }: IhttpRequest): Promise<IhttpResponse> {
        const user = await this.updateProfileService.execute({
            user_id,
            profilePictureName: file.filename,
        });

        return {
            body: {
                data: user,
            },
            statusCode: 200,
        };
    }
}
