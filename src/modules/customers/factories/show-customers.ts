import { ShowCustomersController } from '../controllers/show-customers-controller';
import { ShowCustomersService } from '../services/show-customers-service';
import { CustomersRepository } from '../typeorm/repositories/customers-repository';

export const makeShowCustomersController = (): ShowCustomersController => {
    const showCustomersService = new ShowCustomersService(
        CustomersRepository.getInstance(),
    );

    const showCustomersController = new ShowCustomersController(
        showCustomersService,
    );

    return showCustomersController;
};
