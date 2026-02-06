let npcAtivo = null;

const proximaFalaBTN = document.getElementById("proximaFala");
const fecharFalaBTN = document.getElementById("fecharCaixaDialogo");

proximaFalaBTN.onclick = () => {
    if(!npcAtivo || !npcAtivo.conjuntoFalas) return;

    const caixa = CaixaDialogo.get();
    const TAM = npcAtivo.conjuntoFalas.length - 1;

    if(npcAtivo.indexFala + 1 > TAM){
        npcAtivo.encerraDialogo();
        npcAtivo = null;
    } else {
        npcAtivo.indexFala++;
        caixa.passarDialogo(
            npcAtivo.npc,
            npcAtivo.conjuntoFalas[npcAtivo.indexFala]
        );
    }
};

fecharFalaBTN.onclick = () => {
    if(!npcAtivo) return;
    npcAtivo.encerraDialogo();
    npcAtivo = null;
};

class NPC extends FixedEntity{
    constructor(id, posicao, layer){
        super(posicao, layer);
        
        let data = getNpc(id);
        let playerChapter = getSessionItem("capituloCorrente");
        

        this.npc = data;
        this.especial = data.falasEspeciais;

        if(this.especial){
            this.falas = getFalasEsp(data.id, playerChapter);
        } else {
            this.falas = getFalasCom(data.id);
        }

        this.rosto = data.rosto;
        this.sprites = data.sprites;
        this.elemento.src = `../${data.sprites[0]}`;
        this.hover = data.hover;

        this.emFala = false;
        this.conjuntoFalas = null;
        this.indexFala = 0;

        this.descricao = new Description(
            this.elemento,
            '<i class="fa-solid fa-comment-dots"></i>'
        );

        this.setClasses();
        this.evento();
    }

    setClasses(){
        this.elemento.classList.add("pointer");
    }

    evento(){
        this.elemento.addEventListener("click", ()=>{
            const caixa = CaixaDialogo.get();

            if(caixa.getAtiva()) return;

            npcAtivo = this;

            this.emFala = true;
            this.conjuntoFalas = randomVec(this.falas);
            this.indexFala = 0;

            caixa.passarDialogo(
                this.npc,
                this.conjuntoFalas[this.indexFala]
            );
        });
    }

    encerraDialogo(){
        const caixa = CaixaDialogo.get();

        this.emFala = false;
        this.conjuntoFalas = null;
        this.indexFala = 0;

        caixa.fecharCaixa();
    }
}



