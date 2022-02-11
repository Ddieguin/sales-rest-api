import {
    Column,
    Entity,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    OneToMany,
    JoinColumn,
} from 'typeorm';
import { OrdersProducts } from '../../../orders/typeorm/entities/orders-products';

@Entity('sales-products')
export class Product {
    @PrimaryGeneratedColumn('uuid')
    id_product: string;

    @Column()
    name_product: string;

    @OneToMany(() => OrdersProducts, order_products => order_products.product)
    order_products: OrdersProducts[];

    @Column('decimal')
    price_product: number;

    @Column('int')
    quantity: number;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}
