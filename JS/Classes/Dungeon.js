class Dungeon {
    constructor(id){
        this.id = id;
        let lugar = getplace(id);

        this.nome = lugar.nome;
        this.totalViagens = lugar.viagens;
        this.viagensRestantes = lugar.viagens;
    }

    aumentarTotalViagens(){
        this.viagensRestantes ++;
        mudarBotaoExplorar(viagensRestantes, TOTAL_VIAGENS);
    }
}

function mudarBotaoExplorar(restante, total){
    const BOTAO_EX = document.getElementById("botao-explorar");
    BOTAO_EX.innerHTML = `Avançar (${restante}/${total})`; 
}