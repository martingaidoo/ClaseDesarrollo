import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsModule } from './products/products.module';
import { entities } from './entities';


@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'sqlite',
    database: 'products.db',
    entities: entities,
    synchronize: true,
  }),
  ProductsModule
  ],
  controllers: [],
  providers: [],
})


export class AppModule {}
