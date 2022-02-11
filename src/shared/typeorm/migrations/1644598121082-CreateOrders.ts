import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateOrders1644598121082 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'sales-orders',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_V4()',
                    },
                    {
                        name: 'customer_id',
                        type: 'uuid',
                        isNullable: true,
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
                        name: 'CustomersFK',
                        columnNames: ['customer_id'],
                        referencedTableName: 'sales-customers',
                        referencedColumnNames: ['id'],
                        onDelete: 'SET NULL',
                    },
                ],
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('sales-orders', 'CustomersFK');
        await queryRunner.dropTable('sales-orders');
    }
}
