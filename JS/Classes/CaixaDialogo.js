class CaixaDialogo {
    static instancia = null;

    constructor(){
        this.elemento = document.getElementById("caixa-dialogo");
        this.mainEl = document.querySelector(".caixa-dialogo-data");
        this.aberta = false;
    }

    static get(){
        if(!CaixaDialogo.instancia){
            CaixaDialogo.instancia = new CaixaDialogo();
        }
        return CaixaDialogo.instancia;
    }

    abrirCaixa(){
        this.elemento.style.display = "flex";
        this.aberta = true;
    }

    fecharCaixa(){
        this.elemento.style.display = "none";
        this.aberta = false;
    }

    passarDialogo(NPC, string){
        this.abrirCaixa();

        let nome = NPC.nome;
        let rosto = NPC.rosto || "Sprites/IU/sem_imagem.svg";

        this.mainEl.innerHTML = `
            <img class="dialogo-rosto" src="../${rosto}">
            <div class="dialogo-conteudo">
                <h1 class="fonte-futuretimes animated-aparecer">${nome}</h1>
                <p  class="fonte-comum animated-aparecer">${string}</p>
            </div>
        `;
    }

    getAtiva(){
        return this.aberta;
    }
}
