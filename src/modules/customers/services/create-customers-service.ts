import { AppError } from '../../../shared/http/errors/app-error';
import { IcreateCustomersDto } from '../typeorm/dto/create-customers-dto';
import { Customer } from '../typeorm/entities/customer';
import { CustomersRepository } from '../typeorm/repositories/customers-repository';

export class CreateCustomersService {

    constructor(private readonly customersRepository: CustomersRepository) {}

    async execute({ name, email }: IcreateCustomersDto): Promise<Customer> {
        const emailAlreadyExists = await this.customersRepository.findByEmail(
            email,
        );

        if (emailAlreadyExists) {
            throw new AppError('Email adress already used');
        }

        const customers = this.customersRepository.create({
            name,
            email,
        });

        await this.customersRepository.save(customers);

        return customers;
    }
}
