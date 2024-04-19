import { IsNotEmpty, isNotEmpty } from "class-validator";
import { Categoria } from "src/Categoria/entities/categoria.entities";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:"tb_produtos"})
export class Produto{

@PrimaryGeneratedColumn()
    id: number;
 
  @IsNotEmpty()
    @Column({length:100, nullable: false})
    nome: string;
   
    @Column({type: "decimal", precision: 10, scale: 2, default: 0})
    preco: number;

    @Column({length:1000, nullable: false})
    descricao: string;

    @Column({length:1000, nullable: false})
    foto: string;
          
    @ManyToOne(() => Categoria, (categoria) => categoria.produto, {
      onDelete: "CASCADE"
  })
  categoria: Categoria;

}