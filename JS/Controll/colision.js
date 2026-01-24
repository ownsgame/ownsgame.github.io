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
    const interLeft = Math.max(a.left, b.left);
    const interTop = Math.max(a.top, b.top);
    const interRight = Math.min(a.right, b.right);
    const interBottom = Math.min(a.bottom, b.bottom);

    if (interRight <= interLeft || interBottom <= interTop) {
        return false;
    }

    const areaIntersecao =
        (interRight - interLeft) * (interBottom - interTop);

    const areaA =
        (a.right - a.left) * (a.bottom - a.top);

    const areaB =
        (b.right - b.left) * (b.bottom - b.top);

    const areaMinima = Math.min(areaA, areaB);

    return areaIntersecao >= areaMinima * 0.25;
}
