import { Customer } from '../../../customers/typeorm/entities/customer';

export interface IcreateOrderDto {
    customer: Customer;
    products: Iproduct[];
}

export interface Iproduct {
    id_product: string;
    price: number;
    quantity: number;
}
