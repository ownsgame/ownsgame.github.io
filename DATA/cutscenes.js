const CUTSCENES = [
    {
        id: 1,
        sprites: [
            "Sprites/Cutscenes/hexopodaTale[0].svg",
            "Sprites/Cutscenes/hexopodaTale[1].svg",
            "Sprites/Cutscenes/hexopodaTale[2].svg",
            "Sprites/Cutscenes/hexopodaTale[3].svg",
            "Sprites/Cutscenes/hexopodaTale[4].svg",
            "Sprites/Cutscenes/hexopodaTale[5].svg",
            "Sprites/Cutscenes/hexopodaTale[6].svg",
            "Sprites/Cutscenes/hexopodaTale[7].svg",
            "Sprites/Cutscenes/hexopodaTale[8].svg",
            "Sprites/Cutscenes/hexopodaTale[9].svg",
            "Sprites/Cutscenes/hexopodaTale[10].svg",
            "Sprites/Cutscenes/hexopodaTale[11].svg",
        ],
        textos: [
            `"<i>Filho meu, crave as palavras que te digo em seu coração...Eis que hoje nós nasce uma esperaça que trará das cinzas a glória do Reino de OWN!</i>"`,
            "O Conto do HEXAPODA encuca na cabeça da mais jovem criatura até o ancião mais ocioso, Mas aquilo que era somente um conto, hoje ganha mais um capítulo...",
            "...em meio páginas amareladas deste livro: O Guerreiro capaz de enfrentar os maiores desafios surge",
            "e vai coletar todos os fragmentos da glória de seus inimigos, e afundá-los no mais profundo esquecimento, de que modo que estes se tornaram o conto.",
            "A história diz que a muito tempo nas Terras Sombrias, os MITHYS após terminarem a construção do FRAGMENTO DA SABEDORIA, iniciaram um projeto que abalou a estrutura do MUNDO ANTIGO",
            "Eles juntaram todos os 6 FRAGMENTOS da GLÓRIA e deram inicio àquilo que ficou conhecido como o HEXAPODA",
            "o HEXAPODA era um MITHY capaz de possuir um poder suficiente para desafiar todos os grandes guerreios do MUNDO ANTIGO, e levar os MITHYS ao controle absoluto das raças...",
            "entretanto a chama da rebelião cantou, o do mais fraco escravo da raça dos TOWNS, surge aquele que consegue separar um dos FRAGMENTOS do HEXAPODA, abrindo espaço para sua derrota completa",
            "Após a vitória do TOWN: <i>HELLOS</i> e seus guerreiros, os fragmentos foram espelhados pelas raças vigentes, até que hoje em dia encontram-se espalhados pelos 4 cantos do mundo.",
            "Mas curiosamente, os OWNS são uma das poucas raças modernas que não possuem nenhum fragmento da glória",
            "Você é o novo HELLOS dos OWNS! Filhos dos TOWNS, descendente da maior máquina de poder da história, um guerreiro criado com um único próposito:",
            "Coletar todos os FRAGMENTOS da GLÓRIA, sucumbindo todos os nossos inimigos ao exterminio! Você é nosso GUERREIRO OWN!"
        ],
    }
];

function getCutscene(id){
    const cutscene = CUTSCENES.find(c => c.id === id);
    return cutscene ? cutscene : null;
}