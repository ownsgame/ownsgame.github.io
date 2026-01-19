
function getItem(chave){
    let item = null;

    item = getConsumivel(chave);

    if(item == null){
        item = getEspada(chave);
    }
    
    if(item == null){
        item = getEscudo(chave);
    }
    
    return item;
}