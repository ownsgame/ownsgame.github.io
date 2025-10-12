class ChamadorAcao{
    constructor(){
        this.estado = 0;
    }

    static mudarEstado(id){
        this.estado = id;
    }

    static getAcaoAtual(){
        return this.estado;
    }
}
