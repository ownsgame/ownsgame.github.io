const TELA_GAME_OVER = document.getElementById("game-over");
const TEXTINHOS_MOTIVACIONAIS = [
    "É sério que voê conseguiu perder dessa forma?",
    "Acontece, meu guerreiro, Tente de Novo!",
    "Você insiste em perder essa fase?",
    "Dizem que você é revivido por uma máquina especial",
    "De alguma forma você ainda pode voltar a vida",
];

function fimDeJogo(){
    let rd = randomVec(TEXTINHOS_MOTIVACIONAIS);
    
    if(!SALA.boss){
        apagarSala();
    }
    else{
        apagarSalaBoss();
    }
    
    TELA_GAME_OVER.innerHTML = `
        <h1><i class="fa-solid fa-skull-crossbones"></i> Game Over</h1>
        
        <p class="fonte-comum"><i>"${rd}"</i></p>
        <button onclick="redirecionarUltimaSala()">Voltar</button>
    `;
    TELA_GAME_OVER.style.display = "flex";
}

function vitoriaDeJogo(boss){
    apagarSalaBoss();
    let player = getObjectPlayer();
    player.setVenceu();
    let string;
    
    if(boss != false){
        string = `
            <h1><i class="fa-solid fa-trophy"></i>Vitória</h1>
            
            <p class="fonte-comum"> Você coletou o <i><b>"${boss.nomeFragmento}"</b></i></p>
        `;

        if(boss.recompensas){

            string += `
            <h3>Recompensas:</h3>
            <div class="itens-conteiner">
            `;

            for(let recompensa in boss.recompensas){
                string += itemFrame(recompensa, boss.recompensas[recompensa], false);
            }

            string += "</div>";
        }
    }
    else{
        string = `
            <h1><i class="fa-solid fa-trophy"></i> Vitória</h1>
    
            <p class="fonte-comum"> Você já havia derrotado este Boss anteriormente, por isso sem recompensas mas... Você é bom mesmo em!</p>
        `;
    }
    

    string += `<button onclick="redirecionarUltimaSala()">Voltar</button>`;

    TELA_GAME_OVER.innerHTML = string;
    TELA_GAME_OVER.style.display = "flex";

}