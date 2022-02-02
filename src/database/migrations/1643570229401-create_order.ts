import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createOrder1643570229401 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'orders',
      columns: [
        {
          name: 'id',
          type: 'integer',
          unsigned: true,
          isPrimary: true,
          isGenerated: true,
          generationStrategy: 'increment',
        },
        {
          name: 'created_at',
          type: 'timestamp',
          default: 'now()'
        },
        {
          name: 'name',
          type: 'varchar'
        },
        {
          name: 'telephone',
          type: 'varchar',
        },
        {
          name: 'address',
          type: 'varchar'
        },
        {
          name: 'cake_description',
          type: 'varchar'
        },
        {
          name: 'additional',
          type: 'varchar'
        },
        {
          name: 'weight',
          type: 'varchar'
        },
        {
          name: 'price',
          type: 'numeric',
          scale: 7,
          precision: 2,
        },
        {
          name: 'deliveryDate',
          type: 'varchar'
        },
        {
          name: 'deliveryHour',
          type: 'varchar'
        },
        {
          name: 'status',
          type: 'varchar'
        },
      ]
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
  }

}

/* id: 3,
name: 'Vinicius Duarte',
telephone: varchar
address (complete): varchar
cake_description: 'Bolo Alpino com trufas',
addictional: varchar
weight: 2,
price: numeric(7,2),
{
  name: 'deliveryDate',
  type: 'date'
},
{
  name: 'deliveryHour',
  type: 'date'
},
status: 'Aguardando'

*/
