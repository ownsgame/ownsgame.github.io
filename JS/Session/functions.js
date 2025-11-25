const modelo = {
    iniciante: true,

    vidaBase: 100,
    vidaExtra: 0,
    vidaAumento: 1,
    get vida() { return (this.vidaBase + this.vidaExtra) * this.vidaAumento; },

    defesaBase: 0,
    defesaExtra: 0,
    defesaAumento: 1,
    get defesa() { return (this.defesaBase + this.defesaExtra) * this.defesaAumento; },

    danoBase: 10,
    danoExtra: 0,
    danoAumento: 1,
    get dano() { return (this.danoBase + this.danoExtra) * this.danoAumento; },

    inventario: [],
    recursos: [],
    chefes: {
        tronco: false,
        ciclop: false,
        cavaleiro: false,
        cha: false,
        craque: false,
        lord: false,
    },
    
    capituloAtual: 0,
    armaAtual: null,
    poderAtual: null,
    escudo: null,
};

function corrigirDados(obj, modelo) {
    for (const key in modelo) {
        const tipoModelo = typeof modelo[key];
        const valorModelo = modelo[key];

        // chave não existe → cria com valor do modelo
        if (!(key in obj)) {
            obj[key] = Array.isArray(valorModelo)
                ? [...valorModelo]
                : tipoModelo === "object" && valorModelo !== null
                ? {}
                : valorModelo;
        } else {
            const valorObj = obj[key];

            // se é objeto e não é array → recursão
            if (
                tipoModelo === "object" &&
                valorModelo !== null &&
                !Array.isArray(valorModelo)
            ) {
                if (typeof valorObj !== "object" || valorObj === null || Array.isArray(valorObj)) {
                    obj[key] = {};
                }
                corrigirDados(obj[key], valorModelo);
            }
            // se é array → verifica se é realmente array
            else if (Array.isArray(valorModelo)) {
                if (!Array.isArray(valorObj)) {
                    obj[key] = [...valorModelo];
                }
            }
            // tipos primitivos → verifica tipo
            else if (typeof valorObj !== tipoModelo) {
                obj[key] = valorModelo;
            }
        }
    }
}


function criarDados() {
    let dados = JSON.parse(localStorage.getItem("atributos")) || {};
    corrigirDados(dados, modelo);
    localStorage.setItem("atributos", JSON.stringify(dados));
    return dados;
}

function getDados() {
    let dados = JSON.parse(localStorage.getItem("atributos")) || {};
    corrigirDados(dados, modelo);
    localStorage.setItem("atributos", JSON.stringify(dados));

    return dados;
}

function saveDados(dados) {
    localStorage.setItem("atributos", JSON.stringify(dados));
}

let dadosCopia = criarDados();

function alterarPropriedade(caminho, novoValor) {
    let partes = caminho.split(".");
    let obj = dadosCopia;

    for (let i = 0; i < partes.length - 1; i++) {
        if (!obj[partes[i]]) obj[partes[i]] = {}; 
        obj = obj[partes[i]];
    }

    obj[partes[partes.length - 1]] = novoValor;
}

setInterval(() => {
    saveDados(dadosCopia);
}, 100);
