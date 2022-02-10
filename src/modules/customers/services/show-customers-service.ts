import { AppError } from '../../../shared/http/errors/app-error';
import { Customer } from '../typeorm/entities/customer';
import { CustomersRepository } from '../typeorm/repositories/customers-repository';

export class ShowCustomersService {
    constructor(private readonly customersRepository: CustomersRepository) {
        this.customersRepository = customersRepository;
    }

    async execute(id: string): Promise<Customer> {
        const customersAlreadyExists = await this.customersRepository.findById(
            id,
        );

        if (!customersAlreadyExists) {
            throw new AppError('Customers is not exists ');
        }

        return customersAlreadyExists;
    }
}
