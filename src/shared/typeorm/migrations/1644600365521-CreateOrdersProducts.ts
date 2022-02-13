import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateOrdersProducts1644600365521 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'sales-orders_products',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_V4()',
                    },
                    {
                        name: 'product_id',
                        type: 'uuid',
                        isNullable: true,
                    },
                    {
                        name: 'order_id',
                        type: 'uuid',
                        isNullable: true,
                    },
                    {
                        name: 'price',
                        type: 'decimal',
                        precision: 10,
                        scale: 2,
                    },
                    {
                        name: 'quantity',
                        type: 'int',
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp with time zone',
                        default: 'now()',
                    },
                    {
                        name: 'updated_at',
                        type: 'timestamp with time zone',
                        default: 'now()',
                    },
                ],
                foreignKeys: [
                    {
                        name: 'OrdersFK',
                        columnNames: ['order_id'],
                        referencedColumnNames: ['id'],
                        referencedTableName: 'sales-orders',
                        onDelete: 'SET NULL',
                    },
                    {
                        name: 'ProductFK',
                        columnNames: ['product_id'],
                        referencedTableName: 'sales-products',
                        referencedColumnNames: ['id_product'],
                        onDelete: 'SET NULL',
                    },
                ],
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('sales-Oders_Products');
        await queryRunner.dropForeignKey('product_id', 'sales-orders_products');
        await queryRunner.dropForeignKey('order_id', 'sales-orders_products');
    }
}
