import { Controller, Get, Query, Param, Post ,Body} from '@nestjs/common';
import { ProductsService } from './app.service';
import {BrandEntity, ProductEntity} from "../interfaces.db";


@Controller()
export class ProductsController {
  constructor(private readonly appService: ProductsService) {}

  @Get()
  getProducts(): ProductEntity[] {
    return this.appService.getProducts();
  }
  @Get('/:nombre')
  getProductID(@Param("nombre") nombre:string): ProductEntity[] {
    return this.appService.getProductID(nombre);
  }
  @Get("/type/:nombre")
  getProductType(@Param("nombre") nombre:string): ProductEntity[] {
    return this.appService.getProductType(nombre);
  }
  @Get("/minPrice/:precio")
  getProductMinPrice(@Param("precio") precio:number): ProductEntity[] {
    return this.appService.getProductMinPrice(precio);
  }
  @Get("/maxPrice/:precio")
  getProductMaxPrice(@Param("precio")precio : number): ProductEntity[] {
    return this.appService.getProductMaxPrice(precio);
  }

  @Post("/addProduct")
  postProduct(@Body() product: ProductEntity): ProductEntity[] {
    return this.appService.postProduct(product);
  }

  @Get("/:nombre/brand/")
  getProductBrand(@Param("nombre") nombre : string) : BrandEntity[]{
    return this.appService.getProductBrand(nombre);
  }
}
