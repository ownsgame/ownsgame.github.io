const JOGADOR_EL = document.createElement("img");   
const DADOS = getSession();
let jogador = new Player(
    DADOS.vida, 
    JOGADOR_EL, 
    "Sprites/Player/base.svg", 
    DADOS.defesa, 
    DADOS.ataque, 
);

function getObjectPlayer(){
    return jogador;
}
