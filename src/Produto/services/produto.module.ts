import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Produto } from '../entities/produto.entity';
import { ProdutoController } from '../controllers/produto.controller';
import { ProdutoService } from './produto.service';
import { CategoriaModule } from 'src/Categoria/services/categoria.module';
import { CategoriaService } from 'src/Categoria/services/categoria.service';


@Module({
  imports: [TypeOrmModule.forFeature([Produto]),CategoriaModule],
  providers: [ProdutoService, CategoriaService],
  controllers: [ProdutoController],
  exports: [TypeOrmModule]
  })


export class ProdutoModule {}
