
function itemFrame(id, quantidade = false, onclick = false, percentual = false){
    const ITEM = getItem(id);

    let string = `
        <div id="itemHTML-${ITEM.id}" class="item-conteiner ${ITEM.raridade}" ${onclick ? `onclick="${onclick}"` : ""}>
            <img src="../${ITEM.sprite}">
    `;

    if(quantidade != false || quantidade != 0){
        if(percentual){
            string += `<p class="fonte-comum">${quantidade}%</p>`;
        }
        else{
            string += `<p class="fonte-comum">x${quantidade}</p>`;
        }
    }

    string += "</div>";

    return string;
}

const itens_CLASSES = {
    arma: "Arma",
    cetro: "Cetro",
    escudo: "Escudo",
}

function descreveItem(itemId, quantidade){
    const tela_descreve = document.querySelector(".descreve-item ");
    const item = getItem(itemId);

    let string = 
    `
        <h3>${item.nome}</h3>
        <img class="descreve-item-imagem" src="../${item.sprite}" width="64px">
        <h3>x${quantidade}</h3>

        
        <div class="descreve-textos">
            <p><b>Descrição:</b> <i>"${item.descricao}"</i></p>
            <p><span class="tx-yellow"><b>Raridade:</b></span> ${item.raridade}</p>
            ${item.classe ? `<p><span class="tx-yellow"><b>Classe:</b></span> ${itens_CLASSES[item.classe]}</p>` : ""}
            ${item.dano ? `<p><span class="tx-yellow"><b>Dano Base:</b></span> ${item.dano}</p>` : ""}
            ${item.defesa ? `<p><span class="tx-yellow"><b>Defesa Base:</b></span> ${item.defesa}</p>` : ""}
            ${item.espera ? `<p><span class="tx-yellow"><b>Tempo de Espera:</b></span> ${item.espera} seg</p>` : ""}
        </div> 
    `;

    tela_descreve.innerHTML = string;
}