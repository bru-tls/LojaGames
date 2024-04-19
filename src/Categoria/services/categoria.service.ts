import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult, ILike, Repository } from "typeorm";
import { Categoria } from "../entities/Categoria.entities";
import { Produto } from "src/Produto/entities/produto.entity";

@Injectable()
export class CategoriaService{
    constructor(
        @InjectRepository(Categoria)
        private CategoriaRepository: Repository<Categoria>)
    { }

    async findAll(): Promise<Categoria[]>{
        return await this.CategoriaRepository.find();       
    }


    async findById(id: number): Promise<Categoria>{
let categoria= await this.CategoriaRepository.findOne(
{
    where: {id},
    });
    if(!Categoria)
        throw new HttpException('Categoria não foi encontrada!', HttpStatus.NOT_FOUND);
    return categoria;

    }
    async findByTipo(tipo: string): Promise<Categoria[]> {
        return await this.CategoriaRepository.find({
            where: {
                tipo: ILike(`%${tipo}%`)}
        })
    }

    async create(Categoria: Categoria): Promise<Categoria> {
        return await this.CategoriaRepository.save(Categoria);
    }

    async update(Categoria: Categoria): Promise<Categoria> {

        let buscaCategoria = await this.findById(Categoria.id);

        if (!buscaCategoria || !Categoria.id)
            throw new HttpException('Categoria não encontrado!', HttpStatus.NOT_FOUND);

        return await this.CategoriaRepository.save(Categoria);
    }

    async delete(id: number): Promise<DeleteResult> {

        let buscaCategoria = await this.findById(id);

        if (!buscaCategoria)
            throw new HttpException('Categoria não encontrado!', HttpStatus.NOT_FOUND);

        return await this.CategoriaRepository.delete(id);

    }


}