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
    constructor(id, elemento, posicoes, layer, lugar){
        super(elemento, posicoes, layer);
        
        this.elemento = elemento;
        this.id = id;
        this.lugar = lugar;

        this.elemento.classList.add("tamPadrao");
        this.elemento.classList.add("link");

        this.linkagem();
        setSprite(elemento, "work", id);
    }

    linkagem(){
        const TELA = document.getElementById("show-place");
        const lugar = getPlace(this.lugar);

        this.elemento.addEventListener("click", ()=>{
            TELA.innerHTML = 
            `
                <h3 class="animated-aparecer fonte-futuretimes">${lugar.nome}</h3>
                <img class="animated-aparecer"src="${lugar.sprite}" width="200px" height="200px">
                <div class="row-buttons">
                    <button onclick="location.replace('${lugar.link}');">
                        <i class="fa-solid fa-play"></i>
                    </button>
                    <button class="botao-ativo" onclick="">
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </button>
                    <button class="botao-ativo" onclick="window.location = 'inventario.html'">
                        <i class="fa-solid fa-toolbox"></i>
                    </button>
                    <button onclick="fecharTela('show-place')">
                        <i class="fa-solid fa-x"></i>
                    </button>
                </div>
            `;

            abrirTela("show-place");
        });
    }
}