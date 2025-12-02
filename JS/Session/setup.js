
const NOMES_SAVE = [
    "Reino de Hexopoda", "Heroí do Destino", "Carinha Azul",
    "Guerreiro de Helos", "Terras Distantes", "Terras Desconhecidas",
    "Aflorecer do Amanhã", "Jogador Profissional", "Guerreiro de virtudes",
];

function criarModelo(){
    const nomeRandom = randomVec(NOMES_SAVE);

    return {
        nome: nomeRandom,
        primeiraVez: true,

        vidaBase: 100,
        vidaExtra: 0,
        vidaAumento: 1,
        get vida() { return (this.vidaBase + this.vidaExtra) * this.vidaAumento; },

        defesaBase: 0,
        defesaExtra: 0,
        defesaAumento: 1,
        get defesa() { return (this.defesaBase + this.defesaExtra) * this.defesaAumento; },

        ataqueBase: 10,
        ataqueExtra: 0,
        ataqueAumento: 1,
        get ataque() { return (this.ataqueBase + this.ataqueExtra) * this.ataqueAumento; },

        inventario: [],
        recursos: [],
        conclusao: {
            cap1: false,
            cap2: false,
            cap3: false,
            cap4: false,
            cap5: false,
            cap6: false,
        },

        armadura: {
            capacete: null,
            tronco: null,
            bota: null,
        },

        capituloAtual: 0,
        armaAtual: null,
        poderAtual: null,
        escudoAtual: null,
        ultimaSala: null,
        iniciante: true,
    };
}

function createSaveAt(pos){
    const NEW_SAVE = criarModelo();
    addSave(pos, NEW_SAVE);
    mostrarTelaSaves();
}
