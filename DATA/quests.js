const QUESTS = [
    {
        id: 1,
        nome: "Crie uma espada fantasma",
        descricao: `Forje uma  espada fantasma, ela possui a força que você precisa para encarar o resto de sua jornada`,
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
    {
        id: 3,
        nome: "o Enigma da Esfinge",
        descricao: `Resolva o Enigma da Esfinge, Colete os medalhões dos templos e os leve ao Gizé`,
        capitulo: 2,
        caminho: "esfinge",
    },
    {
        id: 4,
        nome: "o Problema de Melíadas",
        descricao: `Ajude Melíadas a encontrar um par Romântico, talvez na cidade OWN haja alguém disponível`,
        capitulo: 2,
        caminho: "meliadas",
    },
    {
        id: 5,
        nome: "Revolucionário",
        descricao: `Ajude Pícalo com uma revolução dos Ogros em Hellas! Consiga a espada de Hydra`,
        capitulo: 2,
        caminho: "picalo",
    },
]

function getQuest(id){
    const quest = QUESTS.find(q => q.id === id);
    return quest ? quest : null;
}

function getQuestsDoCapitulo(capitulo){
    return QUESTS.filter(quest => quest.capitulo === capitulo);
}

