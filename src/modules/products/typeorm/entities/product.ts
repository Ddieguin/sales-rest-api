import {
    Column,
    Entity,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
} from 'typeorm';

@Entity('sales-products')
export class Product {
    @PrimaryGeneratedColumn('uuid')
    id_product: string;

    @Column()
    name_product: string;

    @Column('decimal')
    price_product: number;

    @Column('int')
    quantity: number;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}
