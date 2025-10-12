const JOGADOR_EL = document.createElement("img");   
const DADOS = getDados();
let jogador = new Player(DADOS.vidaBase, JOGADOR_EL, "Sprites/Player/base.svg", DADOS.defesaBase);

function getObjectPlayer(){
    return jogador;
}
