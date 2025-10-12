class NPC {
    constructor(nome, matrizFalas, objeto, inicioFalas = 0){
        this.nome = nome;
        this.inicioFalas = inicioFalas;
        this.matrizFalas = matrizFalas;
        this.objeto = objeto;
        this.emFala = false;
        this.ativo();
    }

    falar(vetor = null){
        this.objeto.classList.remove("disponivel");
        if(vetor == null){
            const rd = randomInt(this.inicioFalas, this.matrizFalas.length - 1);
            let array = this.matrizFalas[rd];
            let index = 0;
            this.passarDialogo(array[index]);

            const BOTAO_PROX = document.getElementById("proximaFala");
            const BOTAO_EX = document.getElementById("fecharCaixaDialogo");

            BOTAO_PROX.addEventListener("click", ()=>{
                if(index < array.length - 1){
                    index ++;
                    this.passarDialogo(array[index])
                }
                else{
                    this.objeto.classList.add("disponivel");
                    index = 0;
                    fecharCaixaDialogo();
                    this.emFala = false;
                }
            });
            BOTAO_EX.addEventListener("click", ()=>{
                this.objeto.classList.add("disponivel");
                index = 0;
                fecharCaixaDialogo();
                this.emFala = false;
            });
        } 
        else{
            let array = vetor;
            let index = 0;
            this.passarDialogo(array[index]);

            const BOTAO_PROX = document.getElementById("proximaFala");
            const BOTAO_EX = document.getElementById("fecharCaixaDialogo");

            BOTAO_PROX.addEventListener("click", ()=>{
                if(index < array.length - 1){
                    index ++;
                    this.passarDialogo(array[index])
                }
                else{
                    index = 0;
                    this.objeto.classList.add("disponivel");
                    fecharCaixaDialogo();
                    this.emFala = false;
                }
            });
            BOTAO_EX.addEventListener("click", ()=>{
                this.objeto.classList.add("disponivel");
                index = 0;
                fecharCaixaDialogo();
                this.emFala = false;
            });
        }
    }

    passarDialogo(string){
        mostrarDialogo(this.nome, string);
    }

    ativo(){
        this.objeto.classList.add("disponivel");
        this.objeto.addEventListener("click", ()=>{
            if(!this.emFala){
                this.emFala = true;
                this.falar();
            }
        });
    }

    getAtivo(){
        return this.emFala;
    }
}