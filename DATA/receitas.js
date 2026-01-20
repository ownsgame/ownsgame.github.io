const RECEITAS = [
    {
        id: 1,
        resultado: "espadaFantasma",
        quantItensResultado: 1,
        ingredientes: {
            ectoplasma: 20,
        },
        concluiQuest: true,
        quests: [1]
    },
    {
        id: 2,
        resultado: "escudoFantasma",
        quantItensResultado: 1,
        ingredientes: {
            ectoplasma: 35,
        }
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
        quests: [2]
    }
];

function getReceita(id){
    const receita = RECEITAS.find(r => r.id === id);
    return receita ? receita : null;
}

