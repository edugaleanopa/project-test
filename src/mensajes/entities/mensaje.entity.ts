import { Entity, PrimaryGeneratedColumn, Column, PrimaryColumn, BeforeInsert, getRepository, BeforeUpdate } from "typeorm";
import { debug } from "console";
import { NormalizaString } from '../../comun/normaliza-string';
//MIRAR  CONTROL DE ERRORES
//MIRAR  LOGS
//MIRAR  constantes fijas 
@Entity()
export class Mensaje {
        
    @PrimaryColumn()
    id:number;    

    @Column({
        length:20
    })
    nick:string;

    @Column({
        length:10
    })
    mensaje:string;

    @BeforeUpdate()
    private async beforeUpdate() {
        this._Normalizar();
    }

    @BeforeInsert()
    private async beforeInsert() {
        await this._getId().then( idMensaje=> {
            this.id=idMensaje;
            this._Normalizar();
        }
        );
    }
    private async  _getId(){
        const MensajeId=await getRepository(Mensaje).query('select coalesce(max(id),0)+1 as IdMensaje from mensaje');
        return Number(MensajeId[0]['IdMensaje']);        
    }
    private _Normalizar() {
        const NormalizaStr=new NormalizaString();            
        this.mensaje=NormalizaStr.normalizaString(this.mensaje);
        this.nick=NormalizaStr.normalizaString(this.nick);
        //Bucle para recorrer todas las columnas de tipo string
        this.mensaje=NormalizaStr.fijarTamano(this.mensaje,10);
        this.nick=NormalizaStr.fijarTamano(this.nick,20);        
    }
}
