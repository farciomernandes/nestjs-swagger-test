import { DataSource } from 'typeorm';
import { join } from 'path';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import { Env } from './enviroments';

export const TypeOrmDataSource = new DataSource({
  type: 'postgres',
  host: Env.DATABASE_HOST,
  port: Number(Env.DATABASE_PORT),
  username: Env.DATABASE_USERNAME,
  password: Env.DATABASE_PASSWORD,
  database: Env.DATABASE_NAME,
  synchronize: false,
  logger: 'advanced-console',
  entities: [join(__dirname, 'type-orm/schemas/*.schema.{js,ts}')],
  migrationsTableName: 'migrations',
  migrations: [join(__dirname, 'type-orm/migrations/*.ts')],
  namingStrategy: new SnakeNamingStrategy(),
});
