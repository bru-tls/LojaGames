import { IsNotEmpty, isNotEmpty } from "class-validator";
import { Produto } from "src/Produto/entities/produto.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:"tb_categorias"})
export class Categoria{

@PrimaryGeneratedColumn()
    id: number
 
    @IsNotEmpty()
    @Column({length:1000, nullable: false})
    tipo: string
    
  @OneToMany(() => Produto, (produto) => produto.categoria)
  produto: Produto[]
              
}