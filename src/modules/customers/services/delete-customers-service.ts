import { AppError } from '../../../shared/http/errors/app-error';
import { CustomersRepository } from '../typeorm/repositories/customers-repository';

export class DeleteCustomersService {
    constructor(private readonly customersRepository: CustomersRepository) {
        this.customersRepository = customersRepository;
    }

    async execute(id: string) {
        const customer = await this.customersRepository.findById(id);

        if (!customer) {
            throw new AppError('customer is not exists');
        }

        await this.customersRepository.remove(customer);
    }
}
