function getDados() {
    return JSON.parse(localStorage.getItem("atributos"));
}

function saveDados(dados) {
    localStorage.setItem("atributos", JSON.stringify(dados));
}

let dadosCopia = getDados();

function alterarPropriedade(caminho, novoValor) {
    let partes = caminho.split(".");
    let obj = dadosCopia;

    for (let i = 0; i < partes.length - 1; i++) {
        if (!obj[partes[i]]) obj[partes[i]] = {}; 
        obj = obj[partes[i]];
    }

    obj[partes[partes.length - 1]] = novoValor;
}


setInterval(()=>{
    saveDados(dadosCopia);
}, 100);