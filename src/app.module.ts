import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController], //rotas
  providers: [AppService], //qualquer outro arquivo, repositorios, funções, casos de uso, qualquer coisa
})
export class AppModule {}
