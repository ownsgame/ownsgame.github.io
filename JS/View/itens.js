function itemFrame(id, quantidade = false, onclick = false, percentual = false){
    const ITEM = getItem(id);

    let string = `
        <div class="item-conteiner ${ITEM.raridade}" ${onclick ? `onclick="${onclick}"` : ""}>
            <img src="../${ITEM.sprite}">
    `;

    if(quantidade != false || quantidade != 0){
        if(percentual){
            string += `<p class="fonte-comum">${quantidade}%</p>`;
        }
        else{
            string += `<p class="fonte-comum">x${quantidade}</p>`;
        }
    }

    string += "</div>";

    return string;
}