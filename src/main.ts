import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  setDocumentation(app);
  await app.listen(Number(process.env.PORT));
  Logger.log(
    `🚀  Server ready at ${process.env.DATABASE_HOST}:${process.env.PORT}`,
  );
}

const setDocumentation = (app) => {
  const config = new DocumentBuilder()
    .setTitle('Crud nest with swagger and test')
    .setDescription('Documentation app')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/docs', app, document, {
    swaggerOptions: {
      persistAuthorization: true,
    },
    customSiteTitle: 'Crud nest with swagger and test',
  });
};

bootstrap();
