import { Module } from '@nestjs/common';
import { ProductsController } from './app.controller';
import { ProductsService } from './app.service';

@Module({
  imports: [],
  controllers: [ProductsController],
  providers: [ProductsService],
})

@Module({
  imports: [],
  controllers: [ProductsController],
  providers: [ProductsService],
})

//export class BrandsModule {}
export class ProductsModule {}
