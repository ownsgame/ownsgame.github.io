const TELA_GAME_OVER = document.getElementById("game-over");
const TEXTINHOS_MOTIVACIONAIS = [
    "Como você perdeu um nível desses?",
    "Acontece, campeão. Tente de Novo!",
    "Você insiste em perder essa fase?",
    "Levante, e tente novamente pô!",
]

function voltarAoInicio(){
    window.location.replace("mapa.html");
}
function fimDeJogo(){
    
    let rd = randomVec(TEXTINHOS_MOTIVACIONAIS);
    TELA_GAME_OVER.innerHTML = `
        <h2>Fim da Linha!</h2>
        <img src="">
        <h3>${rd}</h3>
        <button onclick="voltarAoInicio()">Voltar</button>
    `;
    TELA_GAME_OVER.style.display = "flex";
}