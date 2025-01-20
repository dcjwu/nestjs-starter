import { NestFactory } from '@nestjs/core';

import { AppModule } from '@/app.module';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api/v8');

  await app.listen(process.env.PORT ?? 8338);
}

bootstrap();
