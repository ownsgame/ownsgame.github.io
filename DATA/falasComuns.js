const FALAS_COM = [
    {
        id: "guarda",
        falas: [[
            "Eu sinceramente gosto dos meus olhos vermelhos", 
            "Fica todo mundo me admirando por essa condição especial",
            "Minha esposa odeia, ela gostaria que eu tivesse olhos normais",
            "Assim outras owns não ficariam olhando pra mim",
            "Mas se bem me lembro",
            "Ela também começou a gostar de mim por conta dos olhos",
            "É estranho as diferentes ideias que temos a respeito dos aspectos físicos dos outros",
        ]],
    },
    {
        id: "mestreWei",
        falas: [[
            "Espere aí jovem! ", 
            "Se for treinar no meu Dojo vai ter que pagar!",
            "Eu sou mercenário sim! Cobro por cada treinamento",
            "E ninguém fica me devendo",
            "Se algum aluno ousar, vai ter que luatr com o mestre!",
        ]],
    },
    {
        id: "dex",
        falas: [
            [
                "Por que está me encarando aí", 
                "Olhe fique sabendo que sou uma pessoa mudada",
                "Se for me julgar pelo meu passado, Ok!",
                "Mas se for pelo fato de eu ser um coelho....",
                "Isso é imperdoavel",
            ],
            [
                "Eu até que estou tentando uma nova vida",
                "Depois que eu fui exilado, não tive muitas oportunidades",
                "Mas devo dizer que o trabalho alternativo é minha especialidade",
                "Como pode ver eu consigo fazer copias de chaves",
                "Que dão acesso a lugares especiais",
                "Não é um trabalho muito bem visto, mas...",
                "Da dinheiro",
            ],
        ],
    }
]

function getFalasCom(id) {
    const FALA = FALAS_COM.find(f => f.id === id);
    
    return FALA.falas || null;
}
