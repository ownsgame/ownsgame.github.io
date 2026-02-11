const RECEITAS = [
    {
        id: 1,
        resultado: "espadaFantasma",
        quantItensResultado: 1,
        ingredientes: {
            ectoplasma: 20,
        },
        concluiQuest: true,
        quests: [1],
        notificacaoEspecial: "equipar",
    },
    {
        id: 2,
        resultado: "escudoFantasma",
        quantItensResultado: 1,
        ingredientes: {
            ectoplasma: 35,
        },
        notificacaoEspecial: "equipar",
    },
    {
        id: 3,
        resultado: "chaveFlora",
        quantItensResultado: 1,
        ingredientes: {
            petala: 15,
            espinho: 5,
            madeira: 20,
            polen: 5,
        },
        concluiQuest: true,
        quests: [2],
        notificacaoEspecial: false,
    },
    {
        id: 4,
        resultado: "passeEsfinge",
        quantItensResultado: 1,
        ingredientes: {
            medalhaoVento: 1,
            medalhaoAgua: 1,
            medalhaoFogo: 1,
        },
        concluiQuest: true,
        quests: [3],
        notificacaoEspecial: false,
    },
    {
        id: 5,
        resultado: "ficha",
        quantItensResultado: 1,
        ingredientes: {
            moeda: 50,
        },
        concluiQuest: false,
        notificacaoEspecial: false,
    },
    {
        id: 6,
        resultado: "moeda",
        quantItensResultado: 40,
        ingredientes: {
            ficha: 1,
        },
        concluiQuest: false,
        notificacaoEspecial: false,
    },
    {
        id: 7,
        resultado: "espadaSapo",
        quantItensResultado: 1,
        ingredientes: {
            peleSapo: 1,
            linguaSapo: 5,
        },
        concluiQuest: false,
        notificacaoEspecial: false,
    },
    {
        id: 8,
        resultado: "moedaHellas",
        quantItensResultado: 1,
        ingredientes: {
            moeda: 6
        },
        concluiQuest: false,
        notificacaoEspecial: false,
    },
    {
        id: 9,
        resultado: "moeda",
        quantItensResultado: 5,
        ingredientes: {
            moedaHellas: 1
        },
        concluiQuest: false,
        notificacaoEspecial: false,
    },
    {
        id: 10,
        resultado: "moedaHellas",
        quantItensResultado: 125,
        ingredientes: {
            joiaRubi: 1
        },
        concluiQuest: false,
        notificacaoEspecial: false,
    },
    {
        id: 11,
        resultado: "moedaHellas",
        quantItensResultado: 250,
        ingredientes: {
            joiaEsmeralda: 1
        },
        concluiQuest: false,
        notificacaoEspecial: false,
    },
    {
        id: 12,
        resultado: "moedaHellas",
        quantItensResultado: 375,
        ingredientes: {
            joiaSafira: 1
        },
        concluiQuest: false,
        notificacaoEspecial: false,
    },
    {
        id: 13,
        resultado: "moedaHellas",
        quantItensResultado: 500,
        ingredientes: {
            joiaDiamante: 1
        },
        concluiQuest: false,
        notificacaoEspecial: false,
    },
    {
        id: 14,
        resultado: "joiaRubi",
        quantItensResultado: 1,
        ingredientes: {
            moedaHellas: 125,
        },
        concluiQuest: false,
        notificacaoEspecial: false,
    },
    {
        id: 15,
        resultado: "joiaEsmeralda",
        quantItensResultado: 1,
        ingredientes: {
            moedaHellas: 250
        },
        concluiQuest: false,
        notificacaoEspecial: false,
    },
    {
        id: 16,
        resultado: "joiaSafira",
        quantItensResultado: 1,
        ingredientes: {
            moedaHellas: 375
        },
        concluiQuest: false,
        notificacaoEspecial: false,
    },
    {
        id: 17,
        resultado: "joiaDiamante",
        quantItensResultado: 1,
        ingredientes: {
            moedaHellas: 500
        },
        concluiQuest: false,
        notificacaoEspecial: false,
    },
    {
        id: 18,
        resultado: "laminaDeHidra",
        quantItensResultado: 1,
        ingredientes: {
            escamaHydra: 5,
            laminaThorin: 1,
        },
        concluiQuest: true,
        quests: [5],
        notificacaoEspecial: true,
    },
];

function getReceita(id){
    const receita = RECEITAS.find(r => r.id === id);
    return receita ? receita : null;
}

