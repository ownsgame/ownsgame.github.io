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
    }
]

function getFalasCom(id) {
    const FALA = FALAS_COM.find(f => f.id === id);
    
    return FALA.falas || null;
}
