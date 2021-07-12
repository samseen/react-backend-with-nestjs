import { BaseExceptionFilter, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new BaseExceptionFilter());

  await app.listen(process.env.PORT || 9000);
}
bootstrap();

// Run 'mysql -u root -p' to bring up the db