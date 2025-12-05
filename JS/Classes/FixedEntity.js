const classLayer = ["layerZero", "layerUm", "layerDois", "layerTres"];

class FixedEntity {
    constructor(elemento, posicao, layer){
        this.elemento = elemento;
        this.inicialPosX = posicao[0];
        this.inicialPosY = posicao[1];
        
        posicionarGrid(elemento, this.inicialPosX, this.inicialPosY);
        fixarAoConteiner(elemento);
        this.elemento.classList.add("tamPadrao");
        this.elemento.classList.add(classLayer[layer]);
    }
}