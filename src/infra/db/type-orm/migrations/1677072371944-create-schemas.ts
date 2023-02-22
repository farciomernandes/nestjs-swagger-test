import { MigrationInterface, QueryRunner } from 'typeorm';

export class createSchemas1677072371944 implements MigrationInterface {
  public schemas = ['users'];
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
    for (const schema of this.schemas) {
      if (!(await queryRunner.hasSchema(schema))) {
        await queryRunner.createSchema(schema);
      }
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    for (const schema of this.schemas) {
      if (await queryRunner.hasSchema(schema)) {
        await queryRunner.dropSchema(schema);
      }
    }
  }
}
