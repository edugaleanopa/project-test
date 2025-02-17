import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Mensaje } from './entities/mensaje.entity';
import { CreateMensajeDto } from './dto/create-mensaje-dto';

@Injectable()
export class MensajesService {
    constructor (    
        @InjectRepository(Mensaje)
        private readonly mensajeRepository: Repository<Mensaje>, ) {}

    async getAll():Promise<Mensaje[]> {
        return await this.mensajeRepository.find();
    }

    async createMensaje(menajeNuevo:CreateMensajeDto):Promise<Mensaje> {
        const nuevo= new Mensaje();
        nuevo.mensaje=menajeNuevo.mensaje;
        nuevo.nick=menajeNuevo.nick;
        return await this.mensajeRepository.save(nuevo);
        
    }
    async updateMensaje(idMensaje:number,mensajeActualizar:CreateMensajeDto):Promise<Mensaje> {
        const mensajeUpdate=await this.mensajeRepository.findOne(idMensaje);
        mensajeUpdate.mensaje=mensajeActualizar.mensaje;
        mensajeUpdate.nick=mensajeActualizar.nick;
        return await this.mensajeRepository.save(mensajeUpdate);
    }    

    async deleteMensaje(idMensaje:number) :Promise<any> {
        return await this.mensajeRepository.delete(idMensaje);
    }

}
