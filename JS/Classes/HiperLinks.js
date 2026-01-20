class DirectLink extends FixedEntity {
    constructor(id, elemento, link, posicoes, layer){
        super(elemento, posicoes, layer);
        
        this.elemento = elemento;
        this.link = link;
        this.id = id;

        this.elemento.classList.add("tamPadrao");
        this.elemento.classList.add("link");

        this.linkagem();
        setSprite(elemento, "work", id);
    }

    linkagem(){
        this.elemento.addEventListener("click", ()=>{
            location.replace(this.link);
        });
    }
}

class IndirectLink extends FixedEntity{
    constructor(id, elemento, posicoes, layer, lugar, questId = false){
        super(elemento, posicoes, layer);
        
        this.elemento = elemento;
        this.id = id;
        this.lugar = lugar;
        
        this.questId = questId;
        this.elemento.classList.add("tamPadrao");
        this.elemento.classList.add("link");

        this.linkagem();
        setSprite(elemento, "work", id);
    }

    linkagem(){
        const TELA = document.getElementById("show-place");
        const lugar = getPlace(this.lugar);

        this.elemento.addEventListener("click", ()=>{
            let string = "";
            if(lugar.boss){
                const boss = getBoss(lugar.bossId);
                string += 
                `
                    <h3 class="animated-aparecer fonte-futuretimes">${boss.nome}</h3>
                    <h3 class="animated-aparecer fonte-comum">${boss.titulo}</h3>
                    <img class="animated-aparecer"src="${boss.sprites[0][0]}" width="200px" height="200px">
                `;
            }
            else {
                string += 
                `
                    <h3 class="animated-aparecer fonte-futuretimes">${lugar.nome}</h3>
                    <img class="animated-aparecer"src="${lugar.sprite}" width="200px" height="200px">
                `;
            }
            if(this.questId != false && !getIsCompleteQuest(this.questId)){
                const quest = getQuest(this.questId);

                string += `<h3 class="fonte-comum">
                                <i class="fa-solid fa-lock"></i> Acesso Bloqueado
                            </h3>
                            <p class="fonte-comum">Você precisa completar a quest: <b>${quest.nome}</b>
                                <br> para liberar passagem, verifique suas quests no inventário</p>
                            <button class="botao-ativo blue-button" onclick="window.location = 'inventario.html'">
                                <i class="fa-solid fa-toolbox"></i> Inventário
                            </button>
                            <button onclick="fecharTela('show-place')" class="red-button">
                                <i class="fa-solid fa-x"></i>
                            </button>
                `;
            }
            else{
                if(lugar.isDungeon){
                    string += `
                        <div class="row-buttons">
                            <button onclick="location.replace('${lugar.link}');">
                                <i class="fa-solid fa-play"></i>
                            </button>
                            <button class="botao-ativo" onclick="">
                                <i class="fa-solid fa-magnifying-glass"></i>
                            </button>
                            <button class="botao-ativo blue-button" onclick="window.location = 'inventario.html'">
                                <i class="fa-solid fa-toolbox"></i>
                            </button>
                            <button onclick="fecharTela('show-place')" class="red-button">
                                <i class="fa-solid fa-x"></i>
                            </button>
                        </div>
                    `;
                }
                else{
                    string += `
                        <p class="fonte-comum">
                            <i class="fa-solid fa-unlock-keyhole"></i> Acesso Liberado
                        </p>
                        <div class="row-buttons">
                            <button onclick="location.replace('${lugar.link}');">
                                <i class="fa-solid fa-play"></i>
                            </button>
                            <button class="botao-ativo blue-button" onclick="window.location = 'inventario.html'">
                                <i class="fa-solid fa-toolbox"></i>
                            </button>
                            <button onclick="fecharTela('show-place')" class="red-button">
                                <i class="fa-solid fa-x"></i>
                            </button>
                        </div>
                    `;
                }
            }
             

            TELA.innerHTML = string;            
            abrirTela("show-place");
        });
    }
}