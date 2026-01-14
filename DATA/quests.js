const QUESTS = [
    {
        id: 1,
        nome: "Crie uma espada fantasma",
        descricao: `A espada fantasma é uma arma criada com fragmentos de ectoplasma, possui a força que você precisa para encarar o resto de sua jornada`,
        capitulo: 1,
        caminho: "espadaFantasma",
    }
]

function getQuest(id){
    const quest = QUESTS.find(q => q.id === id);
    return quest ? quest : null;
}

