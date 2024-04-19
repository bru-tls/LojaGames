import { TypeOrmModule } from "@nestjs/typeorm";
import { Categoria } from "../entities/categoria.entities";
import { Module } from "@nestjs/common";
import { CategoriaService } from "./categoria.service";
import { CategoriaController } from "../controllers/categoria.controller";

@Module({
  imports: [TypeOrmModule.forFeature([Categoria])],
  providers: [CategoriaService],
  controllers: [CategoriaController],
  exports: [TypeOrmModule]
})
export class CategoriaModule {}
