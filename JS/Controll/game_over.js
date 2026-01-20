const TELA_GAME_OVER = document.getElementById("game-over");
const TEXTINHOS_MOTIVACIONAIS = [
    "Como você perdeu um nível desses?",
    "Acontece, campeão. Tente de Novo!",
    "Você insiste em perder essa fase?",
    "Levante, e tente novamente pô!",
]

function fimDeJogo(){
    let rd = randomVec(TEXTINHOS_MOTIVACIONAIS);
    
    if(!SALA.boss){
        apagarSala();
    }
    
    TELA_GAME_OVER.innerHTML = `
        <h1 class="fonte-futuretimes">Game Over</h1>
        
        <p class="fonte-comum">${rd}</p>
        <button onclick="redirecionarUltimaSala()">Voltar</button>
    `;
    TELA_GAME_OVER.style.display = "flex";
}