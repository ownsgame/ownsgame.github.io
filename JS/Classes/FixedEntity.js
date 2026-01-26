const classLayer = ["layerZero", "layerUm", "layerDois", "layerTres"];

class FixedEntity {
    constructor(posicao, layer){
        this.elemento = document.createElement("img");
        this.inicialPosX = posicao[0];
        this.inicialPosY = posicao[1];
        
        posicionarGrid(this.elemento, this.inicialPosX, this.inicialPosY);
        fixarAoConteiner(this.elemento);
        this.elemento.classList.add("tamPadrao");
        this.elemento.classList.add(classLayer[layer]);
    }

    getElemento(){
        return this.elemento;
    }
}