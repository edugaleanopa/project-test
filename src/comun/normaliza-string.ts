export class NormalizaString {
    private readonly ArrayCaracteresMatricula:string[];
    private readonly ArrayCaracteresValidos:string[];

    constructor() {
        this.ArrayCaracteresMatricula=['0','1','2','3','4','5','6','7','8','9',
        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l','m', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v','w','x', 'y', 'z',
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L','M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V','W','X', 'y', 'z',];               
        this.ArrayCaracteresValidos=['0','1','2','3','4','5','6','7','8','9',
        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l','m', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v','w','x', 'y', 'z',
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L','M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V','W','X', 'y', 'z',
        'ñ','Ñ','ç','Ç','Á','É','Í','Ó','Ú','á','é','í','ó','ú','À','È','Ì','Ò','Ù','à','è','ì','ò','ù',
        'Ä','Ë','Ï','Ö','Ü','ä','ë','ï','ö','ü','Â','Ê','Î','Ô','Û','â','ê','î','ô','û'];        
    }      
    
    public fijarTamano(texto:string,tama:number):string {
        let textoAjustado:string;        
        if (texto.length>tama) {
            textoAjustado=texto.substr(0,tama);
        }        
        return textoAjustado;
    }
    public normalizaString(textoString:string):string {
        let textoNormalizado:string;
        textoNormalizado="";
        for (let char of textoString) {
            if (this.ArrayCaracteresValidos.includes(char)) {
                textoNormalizado=textoNormalizado+char;
            }   
        } 
        return textoNormalizado.trim();
    }     
    public normalizaMatricula(textoMatricula:string):string {
        let textoNormalizado:string;
        textoNormalizado="";
        for (let char of textoMatricula) {
            if (this.ArrayCaracteresMatricula.includes(char)) {
                textoNormalizado=textoNormalizado+char;
            }   
        } 
        return textoNormalizado.trim();
    } 

    
}
