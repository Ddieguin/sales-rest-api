import { UpdateCustomersController } from '../controllers/update-customers-controller';
import { UpdateCustomersService } from '../services/update-customers-service';
import { CustomersRepository } from '../typeorm/repositories/customers-repository';

export const makeUpdateCustomersController = (): UpdateCustomersController => {
    const updateCustomersService = new UpdateCustomersService(
        CustomersRepository.getInstance(),
    );

    const updateCustomersController = new UpdateCustomersController(
        updateCustomersService,
    );

    return updateCustomersController;
};
