import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class Users1663371059448 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'users',
            columns: [{
                name: 'id',
                type: 'int',
                isPrimary: true,
                isGenerated: true,
                generationStrategy: 'increment',
            }, {
                name: 'name',
                type: 'varchar',
                length: '50',
                isNullable: false,
            }, {
                name: 'email',
                type: 'varchar',
                length: '50',
                isNullable: false,
            }, {
                name: 'password',
                type: 'varchar',
                length: '100',
                isNullable: false,
            }, {
                name: 'createdAt',
                type: 'timestamp',
                default: 'CURRENT_TIMESTAMP',
            }, {
                name: 'updatedAt',
                type: 'timestamp',
                default: 'CURRENT_TIMESTAMP',
            }],
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('users');
    }

}
