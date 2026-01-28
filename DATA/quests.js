const QUESTS = [
    {
        id: 1,
        nome: "Crie uma espada fantasma",
        descricao: `A espada fantasma é uma arma criada com fragmentos de ectoplasma, possui a força que você precisa para encarar o resto de sua jornada`,
        capitulo: 1,
        caminho: "espadaFantasma",
    },
    {
        id: 2,
        nome: "Consiga uma Chave Flora",
        descricao: `Consiga o itens para falsificar com Dex, uma chave que lhe permite visitar o Rei De Flora`,
        capitulo: 1,
        caminho: "chaveFlora",
    },
]

function getQuest(id){
    const quest = QUESTS.find(q => q.id === id);
    return quest ? quest : null;
}

function getQuestsDoCapitulo(capitulo){
    return QUESTS.filter(quest => quest.capitulo === capitulo);
}

