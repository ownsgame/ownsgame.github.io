const JOGADOR_EL = document.createElement("img");   
const DADOS = getSession();
let jogador = new Player(JOGADOR_EL, "Sprites/Player/base.svg", DADOS);

function getObjectPlayer(){
    return jogador;
}
