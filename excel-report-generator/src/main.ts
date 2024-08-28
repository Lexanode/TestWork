import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import type { NestExpressApplication } from '@nestjs/platform-express';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useGlobalPipes(new ValidationPipe());

  const config = new DocumentBuilder()
    .setTitle('Excel report generator')
    .setDescription('The Escel Generator API description')
    .setVersion('1.0')
    .addTag('excel')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, document);

  const staticDirectory = `${process.cwd()}/static/`;
  app.useStaticAssets(staticDirectory);

  const configService = app.get(ConfigService);
  const port = configService.get<number>('port');
  await app.listen(port);
}
bootstrap();
