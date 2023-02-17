import { DataSource } from 'typeorm';
import { join } from 'path';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

export const TypeOrmDataSource = new DataSource({
  type: 'postgres',
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: false,
  logger: 'advanced-console',
  entities: [join(__dirname, 'type-orm/schemas/*.schema.{js,ts}')],
  migrationsTableName: 'migrations',
  migrations: [join(__dirname, 'type-orm/migrations/*.ts')],
  namingStrategy: new SnakeNamingStrategy(),
});
