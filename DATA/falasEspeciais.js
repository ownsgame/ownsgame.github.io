const FALAS_ESP = [
    {
        id: "sabioown",
        cap1: [
                [
                    "Em nenhum momento você virou pra si mesmo e se perguntou:",
                    "Quem Eu Sou?",
                    "...Ou se questinou o porquê de estar fazendo isso...",
                    "...o Porquê de estar coletando estes fragmentos...",
                    "Ok, Você é Perfeito!",
                ],
                [
                    "Que bom tê-lo de volta",
                    "Este palácio é bem charmoso você não acha?",
                    "Foi construida por volta de 1057 N.Y. há 80 anos atrás",
                    "Construído na celebração do fim da 2° GUERRA HELLOWNIANA...",
                    "...ele é feito de cerâmica de Helas, uma belezura de material!",
                    "Além de que trouxemos vários tesouros de lá, foi um massacre",
                    "Como pode uma terra de Imundos possuir maravilhas de tal natureza?",
                    "Cabe a nós, OWNS, tirar destes ratos, aquilo que é belo...",
                    "...e por direito nos pertence.",
                    "Você vai ter a oportunidade de ir até o REINO DE HELLAS né?",
                    "Já faz um bom tempo que os Owns não vão lá",
                    "Dizem que o Fragmento da Visão se encontra sob proteção de Polifemo o Ciclope gigante",
                    "Você vai massacrar esse cara! Nós somos Owns, não ratos!",
                ],
                [
                    "Os mistérios que rodeam o nosso mundo são demais!",
                    "Gostaria de saber a hora em que você saí daqui e vai explora-lo?",
                    "Não que o palácio seja ruim mas...",
                    "Arrume logo uma espada fantasma, e vá visitar a cidade...",
                    "Mas por favooor!!! Não gaste seu dinheiro no Royal Center Games",
                    "Eles são uns larápios!"
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
                [
                    `Colete Fragmentos de Ectoplasma dos Fantasmas do Reino dos Espelhos <i class="fa-solid fa-ghost"></i>`,
                    "Na Forja Fantasma você pode forjar Espadas e Escudos com isso",
                    "Mas não esqueça de equipá-los",
                    "Assim... eu já estou quebrando a quarta parede até demais mas...",
                    "...me colocaram aqui para ser seu guia então...",
                    `Abra o menu <i class="fa-solid fa-house"></i> vá em > Inventário <i class="fa-solid fa-toolbox"></i>`,
                    `Vá na aba de Arsenal, clique em Espada, Escudo ou Cetro e clique para selecionar seu novo brinquedinho...`,
                    "Você vai reparar que suas estátisticas mudaram então funcionou!",
                ],
        ],
        cap2: [
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


