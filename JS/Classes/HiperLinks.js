class DirectLink extends FixedEntity {
    constructor(id, link, posicoes, layer){
        super(posicoes, layer);
        
        this.link = link;
        this.id = id;

        this.setClasses();
        this.linkagem();
        setSprite(this.elemento, "work", id);
    }

    setClasses(){
        this.elemento.classList.add("tamPadrao", "link");
    }

    linkagem(){
        this.elemento.addEventListener("click", ()=>{
            location.replace(this.link);
        });
    }
}

class IndirectLink extends FixedEntity{
    constructor(id, posicoes, layer, lugar, questId = false){
        super(posicoes, layer);
        
        this.id = id;
        this.lugar = lugar;
        this.questId = questId;

        this.setClasses();
        this.linkagem();
        setSprite(this.elemento, "work", id);
    }

    setClasses(){
        this.elemento.classList.add("tamPadrao", "link");
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
                    <h1 class="animated-aparecer">${boss.nome}</h1>
                    <h3 class="animated-aparecer fonte-comum">${boss.titulo}</h3>
                    <img class="animated-aparecer" src="../${boss.sprites[0][0]}" width="200px" height="200px">
                `;
            }
            else {
                string += 
                `
                    <h1 class="animated-aparecer">${lugar.nome}</h1>
                    <img class="animated-aparecer" src="../${lugar.sprite}" width="200px" height="200px">
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