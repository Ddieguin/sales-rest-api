import { DeleteCustomersController } from '../controllers/delete-customers-controller';
import { DeleteCustomersService } from '../services/delete-customers-service';
import { CustomersRepository } from '../typeorm/repositories/customers-repository';

export const makeDeleteCustomersController = (): DeleteCustomersController => {
    const deleteCustomersService = new DeleteCustomersService(
        CustomersRepository.getInstance(),
    );

    const deleteCustomersController = new DeleteCustomersController(
        deleteCustomersService,
    );

    return deleteCustomersController;
};
