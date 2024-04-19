import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Produto } from './Produto/entities/produto.entity';
import { Categoria } from './Categoria/entities/categoria.entities';
import { CategoriaModule } from './Categoria/services/categoria.module';
import { ProdutoModule } from './Produto/services/produto.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'db_lojagames',
    entities: [Produto, Categoria],
    synchronize: true,
  }),
  ProdutoModule,
  CategoriaModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
