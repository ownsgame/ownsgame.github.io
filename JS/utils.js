function randomInt(min = 0, max = 1) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomVec(vetor){
    let max = (vetor.length) - 1;
    let idx = randomInt(0, max);
    return vetor[idx];
}

function randomBool(){
    let rd = randomInt();
    if(rd == 0){
        return true;
    }
    else{
        return false;
    }
}