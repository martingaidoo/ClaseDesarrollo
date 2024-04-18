import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany} from 'typeorm';
import { ProductEntity } from './product.entity';


@Entity("productTypes")
export class ProductTypesEntity {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;
    @OneToMany(()=>ProductEntity, (product) => product.productType) 
    products: ProductEntity[];
}