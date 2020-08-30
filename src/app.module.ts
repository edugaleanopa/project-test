import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MensajesController } from './mensajes/mensajes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '192.168.1.40',
      port: 3306,
      username: 'admin',
      password: 'mamen23*',
      database: 'sendmeapp_db',
      entities: [],
      synchronize: true,
    }),
  ],
  controllers: [AppController, MensajesController],
  providers: [AppService],
})
export class AppModule {}
