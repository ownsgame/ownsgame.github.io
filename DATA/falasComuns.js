const FALAS_COM = [
    {
        id: "npc",
        falas: [["Vetor de Falas"]],
    }
]

function getFalasCom(id) {
    const FALA = FALAS_COM.find(f => f.id === id);
    
    return FALA.falas || null;
}
