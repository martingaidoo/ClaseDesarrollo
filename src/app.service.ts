import { Injectable } from '@nestjs/common';
import {products} from "../products.db";
import {ProductEntity, BrandEntity} from "../interfaces.db";
import { brands } from 'brands.db';
import { error } from 'console';



@Injectable()
export class ProductsService {
  getProducts(): ProductEntity[] {
    return products;
  }

  getProductID(nombre: string): ProductEntity[] {
    const product = products.find(product => product.name === nombre);
    if (product === undefined || product === null) {
      throw new error("Product not found");
    }
    return product ? [product] : [];
  }
  getProductType(nombre: string): ProductEntity[] {
    const product = products.filter(product => product.type === nombre);
    if (product === undefined || product === null) {
      throw new error("Product not found");
    }
    return product;
  }
  getProductMinPrice(precio: number): ProductEntity[] {
    const product = products.filter(product => product.price >= precio);
    if (product === undefined || product === null) {
      throw new error("Product not found");
    }
    return product;
  }
  getProductMaxPrice(precio: number): ProductEntity[] {
    const product = products.filter(product => product.price <= precio);
    if (product === undefined || product === null) {
      throw new error("Product not found");
    }
    return product;
  }
  postProduct(product: ProductEntity): ProductEntity[] {
    products.push(product);
    return products;
  }

  getProductBrand(nombre: string): BrandEntity[]{
    const product = products.filter(product => product.name === nombre);
    if (product === undefined || product === null) {
      throw new error("Product not found");
    }
    const brand = brands.filter(brand => brand.name === product[0].brand);
    return brand;
  }
}

