import { Module } from '@nestjs/common';
import { ProductsController } from './product.controller';
import { ProductsService } from './product.service';
import { TypeOrmModule } from '@nestjs/typeorm';



  
  @Module({
    imports: [],
    controllers: [ProductsController],
    providers: [ProductsService],
  })
  
  //export class BrandsModule {}
export class ProductsModule {}
