import { CreateCustomersController } from '../controllers/create-customers-controller';
import { CreateCustomersService } from '../services/create-customers-service';
import { CustomersRepository } from '../typeorm/repositories/customers-repository';

export const makeCreateCustomersController = (): CreateCustomersController => {
    const createCustomersService = new CreateCustomersService(
        CustomersRepository.getInstance(),
    );

    const createCustomersController = new CreateCustomersController(
        createCustomersService,
    );

    return createCustomersController;
};
