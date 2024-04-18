import { NestFactory } from '@nestjs/core';
import { ProductsModule } from './app.module';
//import { BrandsModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(ProductsModule);
  app.setGlobalPrefix('products');
  await app.listen(3000);
}
bootstrap();