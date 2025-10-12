function colisionGrid(el1, el2) {
    const row1 = parseInt(el1.style.gridRow);
    const col1 = parseInt(el1.style.gridColumn);
    const row2 = parseInt(el2.style.gridRow);
    const col2 = parseInt(el2.style.gridColumn);

    return row1 === row2 && col1 === col2;
}
