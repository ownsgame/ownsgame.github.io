const FALAS_ESP = [
    {
        id: "sabioown",
        cap0: [
                [
                    "Em nenhum momento se perguntou quem você É?",
                    "Ou se questinou o porquê de estar fazendo isso",
                    "você é Perfeito!",
                ],
                [
                    "Que bom tê-lo de volta",
                    "Esta câmara é bem interessante você não acha?",
                    "Foi construida por volta de 1600... após a batalha contra Helas!",
                    "Derrotamos os helanos! É claro! O chão que você pisa...",
                    "...é feito de cerâmica de Helas, uma belezura de material!",
                    "Como pode uma terra de Imundos possuir maravilha de tal natureza?",
                    "Cabe a nós, OWNS, tirar destes porcos, aquilo que é belo...",
                    "...e por direito nos pertence.",
                ],
                [
                    "Os mistérios que circuncidam o nosso mundo são demais!",
                    "Gostaria de saber a hora em que você saí daqui e vai explora-lo?"
                ],
                [
                    "Tá afim de bater um papinho?",
                    "Bem eu sei que você anda ocupado na sua missão...",
                    "Particularmente, espero que a conclua!",
                    "Ver o declinio das outras nações, é um sonho deste a infância",
                    "Não sei se lembra de quando era pequeno, bem...eu estava lá",
                    "Servindo a minha pátria, combatendo o Grande Dragão!",
                    "Fico feliz de ter servido aos OWNS",
                    "Fico feliz de ter nascido no povo escolhido para Reinar sobre todos os povos do mundo!",
                    "Hoje em dia, continuo servindo daqui da câmara",
                    "Quase não falamos do meu trabalho...",
                    "...",
                    "Prefiro manter isso sob sigilo.",
                ],
                [
                    "Eu não faço ideia do que exatamente é o reino dos espelhos!",
                    "Você já esteve lá, né?",
                    "Ouvi falar que o reino dos espelhos é um reflexo do seu interior...",
                    "...você vê no espelho alguém que é sua imagem e a sua semelhança...",
                    "...alguém que possui medos, sonhos, ambições, falhas...",
                    "Pra muitas pessoas o reino dos Espelhos é terrivel!",
                    "Cheio de fantasmas e monstros!",
                    "...É a própria imagem e semelhança do individuo",
                    "Mas por ser um espelho, aquilo que é visto não é verdade!",
                    "É apenas um reflexo e a forma como o enxerga muda tudo",
                    "Pra outros o reino dos espelhos é muito lindo! Cheio de flores e tudo mais",
                    "O que você viu lá?",
                ],
        ],
        cap1: [
                [
                    "Você é Orgulho dos Owns meu rapaz..."
                ],
        ],
        cap2: [
                [
                    "Você é Orgulho dos Owns meu rapaz..."
                ],
        ],
        cap3: [
                [
                    "Você é Orgulho dos Owns meu rapaz..."
                ],
        ],
        cap4: [
                [
                    "Você é Orgulho dos Owns meu rapaz..."
                ],
        ],
        cap5: [
                [
                    "Você é Orgulho dos Owns meu rapaz..."
                ],
        ],
    }
]

function getFalasEsp(id, cap) {
    const FALA = FALAS_ESP.find(f => f.id === id);
    if (!FALA) return null;

    const chaveCapitulo = `cap${cap}`;
    return FALA[chaveCapitulo] || null;
}


