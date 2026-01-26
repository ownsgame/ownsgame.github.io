class NPC extends FixedEntity{
    constructor(id, posicao, layer){
        super(posicao, layer);
        
        let data = getNpc(id);
        this.npc = data;
        this.especial = data.falasEspeciais;
                
        if(this.especial){
            this.falas = getFalasEsp(data.id, 0);
        }
        else{
            this.falas = getFalasCom(data.id);
        }

        this.rosto = data.rosto;
        this.sprites = data.sprites;
        this.elemento.src = `../${data.sprites[0]}`;
        this.hover = data.hover;
        this.emFala = false;
        this.conjuntoFalas = null;
        this.indexFala = 0;
        this.descricao = new Description(this.elemento, '<i class="fa-solid fa-comment-dots"></i>');
        this.setClasses();  
        this.evento();  
    }

    setClasses(){
        this.elemento.classList.add("pointer");
    }
    evento(){
        this.elemento.addEventListener("click", ()=>{
            const caixa = CaixaDialogo.get();

            if(this.emFala) return;
            if(caixa.getAtiva()) return;
            
            this.emFala = true;
            this.conjuntoFalas = randomVec(this.falas);
            this.indexFala = 0;
            caixa.passarDialogo(this.npc, this.conjuntoFalas[this.indexFala]);
            
        });

        let proximaFalaBTN = document.getElementById("proximaFala");
        let fecharFalaBTN = document.getElementById("fecharCaixaDialogo");

        proximaFalaBTN.onclick = () => {
            const TAM = this.conjuntoFalas.length - 1;
            const caixa = CaixaDialogo.get();

            if(this.indexFala + 1 > TAM){
                this.encerraDialogo();
            } else {
                this.indexFala++;
                caixa.passarDialogo(this.npc, this.conjuntoFalas[this.indexFala]);
            }
        };


        fecharFalaBTN.onclick = () => {
            this.encerraDialogo();
        }
    }   
    
    encerraDialogo(){
        const caixa = CaixaDialogo.get();
        this.emFala = false;
        this.conjuntoFalas = null;
        this.indexFala = 0;

        caixa.fecharCaixa();
    }
}