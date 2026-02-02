function mostrarRecompensas(id, quantidade){
    const RECOMPENSA = getItem(id);
    emitirNotificacaoFase(0, id, `x${quantidade} ${RECOMPENSA.nome}`)
    verificaAcaoReward(id);
}

const NOTIFICACOES_LEVEL = document.getElementById("notificaoes-level");
const TIPO_NOTIFICACOES_LEVEL = ["Item Obtido", "Em Combate"];

let idNotificacaoLevel = 0;

function emitirNotificacaoFase(tipo, id, mensagem){
    const notificacao  = document.createElement("div");
    let idItem = `notificacao-level-${idNotificacaoLevel}`;
    idNotificacaoLevel ++;
    notificacao.classList.add("notificacao-level", `notificacao-level-${tipo}`)
    notificacao.setAttribute("id", idItem);

    let imagem = "Sprites/IU/sem_imagem.svg";

    if(tipo == 0){
        imagem = getItem(id).sprite;
    }
    else if(tipo == 1){
        imagem = getInimigoById(id).sprites[0][0];
    }
    
    notificacao.innerHTML = `
        <img src="../${imagem}">
        <div>
            <h3 class="fonte-comum">${TIPO_NOTIFICACOES_LEVEL[tipo]}</h3>
            <p class="fonte-comum">${mensagem}</p>
        </div>
    `;

    NOTIFICACOES_LEVEL.appendChild(notificacao);
    let tempo = tipo == 0 ? 1500 : 700;
    abrirTela(idItem, false);    
    
    setTimeout(() => {
        fecharTela(idItem, false);
    }, tempo);    
}
