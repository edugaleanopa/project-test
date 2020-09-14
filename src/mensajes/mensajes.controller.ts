import { Controller, Post, Body, Get, Put, Delete, Res, HttpStatus, Param } from '@nestjs/common';
import { CreateMensajeDto } from './dto/create-mensaje-dto';
import { MensajesService } from './mensajes.service';



@Controller('mensajes')
export class MensajesController {
    constructor(private mensajesServices:MensajesService) {

    };

    @Post()
    create(@Body() createMensajeDto: CreateMensajeDto,@Res() response) {
        this.mensajesServices.createMensaje(createMensajeDto).then(
            mensaje=>{
                response.status(HttpStatus.CREATED).json(mensaje);
            }        
        ).catch( ()=> {
                response.status(HttpStatus.FORBIDDEN).json({mensaje:'error en la creación'})
            }
        );
    }

    @Get()
    getAll(@Res() response ){
        this.mensajesServices.getAll().then(mensajeList=>{
            response.status(HttpStatus.OK).json(mensajeList);
        }).catch( ()=>{
            response.status(HttpStatus.FORBIDDEN).json({mensaje:'error en la obtención del metodo'})
        });
    }

    @Put(':id')
    update(@Body() updateMensajeDto:CreateMensajeDto,@Param('id') idMensaje, @Res() response ) {
        this.mensajesServices.updateMensaje(idMensaje,updateMensajeDto).then(
            mensaje=>{
                response.status(HttpStatus.OK).json(mensaje);
            }        
        ).catch( ()=> {
                response.status(HttpStatus.FORBIDDEN).json({mensaje:'error en la update'})
            }
        );
    }
    @Delete(':id')
    delete(@Param('id') idMensaje, @Res() response ) {
        this.mensajesServices.deleteMensaje(idMensaje).then(
            res=>{
                response.status(HttpStatus.OK).json(res);
            }        
        ).catch( ()=> {
                response.status(HttpStatus.FORBIDDEN).json({mensaje:'error en la delete'})
            }
        );
    }
}
