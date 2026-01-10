function colisionGrid(el1, el2) {
    const row1 = parseInt(el1.style.gridRow);
    const col1 = parseInt(el1.style.gridColumn);
    const row2 = parseInt(el2.style.gridRow);
    const col2 = parseInt(el2.style.gridColumn);

    return row1 === row2 && col1 === col2;
}

function generalColision(aX, bX, aY, bY, alturaA, alturaB, larguraA, larguraB){
    return !(
        aX + alturaA - 1 < bX ||
        aX > bX + alturaB - 1 ||
        aY + larguraA - 1 < bY ||
        aY > bY + larguraB - 1
    );
}

function colisionPixel(a, b){
    return !(
        a.right < b.left ||
        a.left > b.right ||
        a.bottom < b.top ||
        a.top > b.bottom
    );
}
