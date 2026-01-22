const TELA_GAME_OVER = document.getElementById("game-over");
const TEXTINHOS_MOTIVACIONAIS = [
    "É sério que voê conseguiu perder dessa forma?",
    "Acontece, meu guerreiro, Tente de Novo!",
    "Você insiste em perder essa fase?",
    "Dizem que você é revivido por uma máquina especial",
    "De alguma forma você ainda pode voltar a vida",
]

function fimDeJogo(){
    let rd = randomVec(TEXTINHOS_MOTIVACIONAIS);
    
    if(!SALA.boss){
        apagarSala();
    }
    
    TELA_GAME_OVER.innerHTML = `
        <h1><i class="fa-solid fa-skull-crossbones"></i> Game Over</h1>
        
        <p class="fonte-comum"><i>"${rd}"</i></p>
        <button onclick="redirecionarUltimaSala()">Voltar</button>
    `;
    TELA_GAME_OVER.style.display = "flex";
}