class WorkBench {
    constructor(id, pos){
        let bancada = getWorkBench(id);
        this.nome = bancada.nome;
        this.tipo = bancada.tipo;
        this.sprite = bancada.sprite

        if(this.tipo == "construção"){
            this.receitas = bancada.receitas;
        }

        this.criarElemento(pos);
        this.adicionarClasses();
        this.elemento.onclick = () => this.clique();
    }

    criarElemento(pos){
        this.elemento = document.createElement("img");
        this.elemento.src = `../${this.sprite}`;
        posicionarGrid(this.elemento, pos[0], pos[1]);
        fixarAoConteiner(this.elemento);
        this.descricao = new Description(this.elemento, this.nome);
    }

    adicionarClasses(){
        if(this.elemento){
            this.elemento.classList.add("pointer", "tamPadrao", "layerDois");
        }
    }

    clique(){
        if(this.tipo == "construção"){
            loadBancadaContrucao(this.nome, this.receitas);
        }
        else if(this.tipo == "treino"){
            loadTrainPerfil();
        }
        else if(this.tipo == "teleporte"){
            loadTeleport();
        }
    }

    getElemento(){
        return this.elemento;
    }
}