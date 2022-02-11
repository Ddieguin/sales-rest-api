import {
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
    ManyToOne,
    JoinColumn,
    Column,
    OneToMany,
} from 'typeorm';
import { OrdersProducts } from './orders-products';
import { Customer } from '../../../customers/typeorm/entities/customer';

@Entity('sales-orders')
export class Order {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    customer_id: string;

    @ManyToOne(() => Customer)
    @JoinColumn({ name: 'customer_id' })
    customer: Customer;

    @OneToMany(() => OrdersProducts, orders_products => orders_products.order, {
        cascade: true,
    })
    order_products: OrdersProducts[];

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}
