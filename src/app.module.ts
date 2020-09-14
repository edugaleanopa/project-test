import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MensajesController } from './mensajes/mensajes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MensajesService } from './mensajes/mensajes.service';
import { Mensaje } from './mensajes/entities/mensaje.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '192.168.1.40',
      port: 3306,
      username: 'admin',
      password: 'mamen23*',
      database: 'sendmeapp_db',
      entities: [Mensaje],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Mensaje])
    ],
  controllers: [AppController, MensajesController],
  providers: [AppService, MensajesService],
})
export class AppModule {}
