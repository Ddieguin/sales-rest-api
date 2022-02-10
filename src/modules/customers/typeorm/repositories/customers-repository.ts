import { EntityRepository, getCustomRepository, Repository } from 'typeorm';
import { Customer } from '../entities/customer';

@EntityRepository(Customer)
export class CustomersRepository extends Repository<Customer> {
    private static instance: CustomersRepository;

    static getInstance(): CustomersRepository {
        if (!CustomersRepository.instance) {
            CustomersRepository.instance = getCustomRepository(this);
        }

        return CustomersRepository.instance;
    }

    async findByName(name: string): Promise<Customer | undefined> {
        const customer = await this.findOne({
            where: {
                name,
            },
        });

        return customer;
    }

    async findById(id: string): Promise<Customer | undefined> {
        const customer = await this.findOne({
            where: {
                id,
            },
        });

        return customer;
    }

    async findByEmail(email: string): Promise<Customer | undefined> {
        const customer = await this.findOne({
            where: {
                email,
            },
        });

        return customer;
    }
}
