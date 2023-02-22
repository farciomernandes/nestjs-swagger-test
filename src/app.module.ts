import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';
import { UserController } from './presentation/user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmDataSource } from './infra/db/database.provider';
import { UserModule } from './infra/modules/user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env'],
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: () => ({}),
      dataSourceFactory: async () => {
        const dataSource = await TypeOrmDataSource.initialize();
        return dataSource;
      },
    }),
    UserModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
