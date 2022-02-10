import { AppError } from '../../../shared/http/errors/app-error';
import { IupdateCustomersDto } from '../typeorm/dto/update-customers-dto';
import { Customer } from '../typeorm/entities/customer';
import { CustomersRepository } from '../typeorm/repositories/customers-repository';

export class UpdateCustomersService {
    constructor(private readonly customersRepository: CustomersRepository) {
        this.customersRepository = customersRepository;
    }
    async execute({ name, email, id }: IupdateCustomersDto): Promise<Customer> {
        const customer = await this.customersRepository.findOne({
            where: {
                id,
            },
        });

        if (!customer) {
            throw new AppError('Customers is not exists');
        }

        const emailAlreadyExists = await this.customersRepository.findOne({
            where: {
                email,
            },
        });

        if (emailAlreadyExists && customer.email !== email) {
            throw new AppError('Email already in use');
        }

        customer.name = name ? name : customer.name;
        customer.email = email ? email : customer.email;

        await this.customersRepository.save(customer);

        return customer;
    }
}
