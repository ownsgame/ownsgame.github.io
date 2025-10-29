let MapaPres = [
    ["g", "g", "g", "g", "g"],
    ["g", "g", "g", "g", "g"],
    ["g", "g", "g", "g", "g"],
    ["g", "g", "g", "g", "g"],
    ["g", "g", "g", "g", "g"],
]

/*
 Sendo:
 "g": ground
 "c": chest
 "v": void
*/

function getMapaPres(){
    return MapaPres;
}

function getTileValue(x, y, z = true){
    if(z){
        return(MapaPres[x][y])
    }
    else{
        return(MapaPres[x - 1][y - 1])
    }
}

function setTileValue(v, x, y, z = true){
    if(z){
        MapaPres[x][y] = v;
    }
    else{
        MapaPres[x - 1][y - 1] = v;
    }
}


let enemyMap = [
    [false, false, false, false, false],
    [false, false, false, false, false],
    [false, false, false, false, false],
    [false, false, false, false, false],
    [false, false, false, false, false],
]

function getEnemyMap(){
    return enemyMap;
}

function getTileEnemy(x, y, z = true){
    if(z){
        return(enemyMap[x][y])
    }
    else{
        return(enemyMap[x - 1][y - 1])
    }
}

function setTileEnemyToogle(xOld, yOld, xNew, yNew, z = true){
    setTileEnemy(true, xNew, yNew, z);
    setTileEnemy(false, xOld, yOld, z);
}

function hasEnemyLine(line){
    line -= 1;

    for(let i =0; i < 5; i ++){
        if(enemyMap[line][i] == true){
            return true;
        }
    }

    return false;
}

function hasEnemyColumn(Col){
    Col -= 1;

    for(let i =0; i < 5; i ++){
        if(enemyMap[i][Col] == true){
            return true;
        }
    }

    return false;
}

function setTileEnemy(v = true, x, y, z = true){
    if(z){
        enemyMap[x][y] = v;
    }
    else{
        enemyMap[x - 1][y - 1] = v;
    }
}
